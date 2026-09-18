// Serverless API route for Vercel deployment
// Handles "Get Started", "Book a Demo", "Contact Sales", and "Newsletter" submissions

export default async function handler(req, res) {
  // Allow CORS for local dev or custom domains
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { type, name, email, phone, company, businessType, requirement, preferredDate, preferredTime, message } = req.body || {};

    // Basic validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'A valid email address is required.' });
    }

    if (type !== 'newsletter' && !name) {
      return res.status(400).json({ success: false, message: 'Full name is required.' });
    }

    const submissionData = {
      type: type || 'contact',
      name: name || 'Anonymous / Newsletter Subscriber',
      email,
      phone: phone || 'N/A',
      company: company || 'N/A',
      businessType: businessType || 'N/A',
      requirement: requirement || 'N/A',
      preferredDate: preferredDate || null,
      preferredTime: preferredTime || null,
      message: message || '',
      submittedAt: new Date().toISOString(),
    };

    // If an external webhook is configured (e.g. Orizer ERP or Slack webhook), forward it
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith('http')) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionData),
        });
      } catch (err) {
        console.warn('Webhook dispatch failed, continuing:', err.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Your request has been received successfully. Our team will contact you shortly.',
      leadId: 'EBZ-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error processing request.' });
  }
}
