const otpTemplate = (name, otp) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #4F46E5; text-align: center;">Verify Your Account</h2>
      <p>Hello ${name},</p>
      <p>Thank you for registering. Please use the following One-Time Password (OTP) to complete your verification process. This OTP is valid for 10 minutes:</p>
      <div style="background-color: #F3F4F6; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 4px; color: #1F2937; border-radius: 6px; margin: 20px 0;">
        ${otp}
      </div>
      <p>If you did not request this, please ignore this email.</p>
      <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
      <p style="font-size: 12px; color: #9CA3AF; text-align: center;">Chat App Team</p>
    </div>
  `;
};

const resetPasswordTemplate = (name, resetURL) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #EF4444; text-align: center;">Reset Your Password</h2>
      <p>Hello ${name},</p>
      <p>We received a request to reset your password. Click the button below to choose a new password. This link is valid for 10 minutes:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetURL}" style="background-color: #EF4444; color: white; padding: 12px 24px; text-align: center; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 6px; display: inline-block;">
          Reset Password
        </a>
      </div>
      <p>If you did not request a password reset, please ignore this email.</p>
      <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
      <p style="font-size: 12px; color: #9CA3AF; text-align: center;">Chat App Team</p>
    </div>
  `;
};

module.exports = {
  otpTemplate,
  resetPasswordTemplate,
};
