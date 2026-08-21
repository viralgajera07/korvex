import nodemailer from 'nodemailer';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildInquiryEmailHtml({ name, phone, email, company, subject, message, submittedOn, ipAddress }) {
  const rows = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email],
    ['Company', company || '—'],
    ['Subject', subject || '—'],
    ['Message', message],
    ['Submitted On', submittedOn],
    ['IP Address', ipAddress || '—'],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;vertical-align:top;">${escapeHtml(label)}:</td>
          <td style="padding:10px 16px;color:#1f2937;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Website Inquiry</title>
  </head>
  <body style="margin:0;padding:24px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.08);">
      <div style="background:#1db854;color:#ffffff;padding:20px 24px;">
        <h1 style="margin:0;font-size:22px;font-weight:700;">New Website Inquiry</h1>
        <p style="margin:8px 0 0;font-size:14px;opacity:0.95;">A new inquiry was submitted via the KORVEX website.</p>
      </div>
      <div style="padding:8px 0 16px;">
        <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
      </div>
    </div>
  </body>
</html>`;
}

let transporter;

function getTransporter() {
  if (transporter) return transporter;

  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
    throw new Error('SMTP credentials are not configured.');
  }

  transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: Number(EMAIL_PORT) === 465,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  return transporter;
}

export async function sendInquiryEmail(inquiry, ipAddress) {
  const receiver = process.env.RECEIVER_EMAIL;

  if (!receiver) {
    throw new Error('RECEIVER_EMAIL is not configured.');
  }

  const submittedOn = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'long',
  });

  const payload = {
    ...inquiry,
    submittedOn,
    ipAddress,
  };

  const html = buildInquiryEmailHtml(payload);
  const text = [
    'New Website Inquiry',
    '',
    `Name: ${inquiry.name}`,
    `Phone: ${inquiry.phone}`,
    `Email: ${inquiry.email}`,
    `Company: ${inquiry.company || '—'}`,
    `Subject: ${inquiry.subject || '—'}`,
    `Message: ${inquiry.message}`,
    '',
    `Submitted On: ${submittedOn}`,
    `IP Address: ${ipAddress || '—'}`,
  ].join('\n');

  const mailOptions = {
    from: `"KORVEX Website" <${process.env.EMAIL_USER}>`,
    to: receiver,
    replyTo: inquiry.email,
    subject: `New Inquiry${inquiry.subject ? `: ${inquiry.subject}` : ''} — ${inquiry.name}`,
    text,
    html,
  };

  await getTransporter().sendMail(mailOptions);
}
