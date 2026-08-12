import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { validateInquiryPayload } from './utils/validation.js';
import { sendInquiryEmail } from './utils/email.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Middleware
app.use(helmet());

const corsOrigin = process.env.CORS_ORIGIN || '*';
app.use(
  cors({
    origin: corsOrigin,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json({ limit: '10kb' }));

// Rate limiter for contact endpoint
const windowMs = Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000;
const maxRequests = Number(process.env.RATE_LIMIT_MAX) || 5;

const contactLimiter = rateLimit({
  windowMs,
  max: maxRequests,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests from this IP. Please try again after 15 minutes.',
  },
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact API endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const validation = validateInquiryPayload(req.body);
    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validation.errors,
      });
    }

    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    await sendInquiryEmail(validation.data, clientIp);

    return res.status(200).json({
      success: true,
      message: 'Inquiry submitted successfully.',
    });
  } catch (err) {
    console.error('Error handling contact submission:', err.message || err);

    const isAuthError =
      err.message &&
      (err.message.includes('BadCredentials') ||
        err.message.includes('Username and Password not accepted') ||
        err.message.includes('535') ||
        err.message.includes('Invalid login'));

    const isConfigError =
      err.message &&
      (err.message.includes('SMTP credentials') || err.message.includes('RECEIVER_EMAIL'));

    let errorMsg = 'Failed to send inquiry email. Please try again later.';
    if (isAuthError) {
      errorMsg = 'SMTP Login Failed: Please set a valid EMAIL_USER and EMAIL_PASS (Google App Password) in server/.env';
    } else if (isConfigError) {
      errorMsg = 'Email server is currently not configured. Please set credentials in server/.env';
    }

    return res.status(500).json({
      success: false,
      error: errorMsg,
    });
  }
});

app.listen(PORT, () => {
  console.log(`KORVEX API Server running on port ${PORT}`);
});
