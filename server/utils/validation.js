const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s\-().]{7,20}$/;

export function sanitizeString(value, maxLength = 500) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

export function validateInquiryPayload(body) {
  const errors = {};

  const name = sanitizeString(body.name, 100);
  const phone = sanitizeString(body.phone, 20);
  const email = sanitizeString(body.email, 254);
  const company = sanitizeString(body.company, 100);
  const subject = sanitizeString(body.subject, 200);
  const message = sanitizeString(body.message, 5000);
  const service = sanitizeString(body.service, 100);

  if (!name || name.length < 2) {
    errors.name = 'Name is required and must be at least 2 characters.';
  }

  if (!phone || !PHONE_REGEX.test(phone)) {
    errors.phone = 'A valid phone number is required.';
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = 'A valid email address is required.';
  }

  if (!message || message.length < 10) {
    errors.message = 'Message is required and must be at least 10 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      name,
      phone,
      email,
      company: company || '',
      subject: subject || service || '',
      message,
      service: service || '',
    },
  };
}
