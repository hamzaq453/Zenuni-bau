import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // SMTP Transport Configuration (Use Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // App password (not Gmail password)
      },
    });

    // Email Content
    const mailOptions = {
      from: email,
      to: "zenuni_bau@hotmail.com",
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to send message.", error }, { status: 500 });
  }
}
