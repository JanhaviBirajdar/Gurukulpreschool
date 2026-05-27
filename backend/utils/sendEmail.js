const nodemailer = require('nodemailer');

/**
 * Send an email notification for a new inquiry.
 * Uses Gmail SMTP with an App Password (not your regular Gmail password).
 *
 * Required .env variables:
 *   EMAIL_USER    – Your Gmail address (e.g. gurukul.talegao@gmail.com)
 *   EMAIL_PASS    – A Gmail App Password (16 chars, no spaces)
 *   EMAIL_TO      – Principal's email to receive inquiries
 */
const sendEmail = async ({ name, phone, email, message }) => {
  // Create a reusable transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Beautiful HTML email template
  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fdfbff; border-radius: 16px; overflow: hidden; border: 1px solid #f0e6ff;">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #FF6B9D, #A78BFA); padding: 32px 24px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">🏫 New Inquiry from Website</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0; font-size: 14px;">Gurukul Pre School — Contact Form Submission</p>
      </div>

      <!-- Body -->
      <div style="padding: 32px 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0e6ff; color: #888; font-size: 13px; font-weight: 600; width: 120px; vertical-align: top;">👤 Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0e6ff; color: #333; font-size: 15px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0e6ff; color: #888; font-size: 13px; font-weight: 600; vertical-align: top;">📞 Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0e6ff; color: #333; font-size: 15px;">
              <a href="tel:${phone}" style="color: #FF6B9D; text-decoration: none; font-weight: 600;">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0e6ff; color: #888; font-size: 13px; font-weight: 600; vertical-align: top;">✉️ Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0e6ff; color: #333; font-size: 15px;">
              <a href="mailto:${email}" style="color: #A78BFA; text-decoration: none; font-weight: 600;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #888; font-size: 13px; font-weight: 600; vertical-align: top;">💬 Message</td>
            <td style="padding: 12px 0; color: #333; font-size: 15px; line-height: 1.6;">${message}</td>
          </tr>
        </table>
      </div>

      <!-- Footer -->
      <div style="background: #f8f4ff; padding: 16px 24px; text-align: center; border-top: 1px solid #f0e6ff;">
        <p style="margin: 0; color: #aaa; font-size: 12px;">
          This email was sent automatically from the Gurukul Pre School website contact form.
          <br/>You can reply directly to this email to respond to the parent.
        </p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Gurukul Pre School" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    replyTo: email, // So principal can hit "Reply" and it goes to the parent
    subject: `📩 New Inquiry from ${name} — Gurukul Pre School`,
    html: htmlBody,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
