import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // SMTP-Transportkonfiguration (Verwendung von Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Deine Gmail-Adresse
        pass: process.env.GMAIL_APP_PASSWORD, // App-Passwort (nicht das Gmail-Passwort)
      },
    });

    // E-Mail-Inhalt
    const mailOptions = {
      from: email,
      to: "zenuni_bau@hotmail.com",
      subject: `Kontaktformular: ${subject}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Nachricht erfolgreich gesendet!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Fehler beim Senden der Nachricht.", error }, { status: 500 });
  }
}
