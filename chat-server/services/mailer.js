const nodemailer = require("nodemailer");

// Create Nodemailer SMTP transporter using configuration from environment variables
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp-relay.brevo.com",
  port: parseInt(process.env.MAIL_PORT || "587", 10),
  secure: process.env.MAIL_PORT === "465", // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

/**
 * Helper function to send email
 * @param {Object} options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML content
 * @param {string} [options.from] - Sender email address (falls back to MAIL_FROM)
 */
const sendEmail = async ({ to, subject, html, from }) => {
  const mailOptions = {
    from: from || process.env.MAIL_FROM || "no-reply@chatapp.com",
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
};

module.exports = {
  sendEmail,
};
