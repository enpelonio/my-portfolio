export const POST = async (req) => {
  const { name, email, message } = await req.json();
  // Validate input
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
    });
  }

  try {
    // Use an email-sending service like Nodemailer
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      service: "Gmail", // Replace with your email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECIPIENT_EMAIL, // Your email address
      subject: "New Contact Form Submission",
      text: "Email address:\n" + email + "\n\nMessage: \n" + message,
    });

    return new Response(JSON.stringify({ success: "Message sent" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
    });
  }
};
