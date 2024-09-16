"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  email: z.string().email("Email tidak valid").min(1, "Email harus diisi"),
  phone: z.string().min(11, "Nomor telepon harus diisi minimal 11 angka"),
  message: z.string().min(10, "Pesan harus diisi minimal 10 karakter"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email service provider
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address or other email service credentials
    pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
  },
});

// Server action to handle contact form submission
export async function sendContactEmail(data: ContactFormValues) {
  // Validate the form data using the Zod schema
  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    // Throw error if validation fails
    const errorMessage = parsedData.error.errors[0]?.message || "Invalid data";
    throw new Error(errorMessage);
  }

  const { name, email, phone, message } = parsedData.data;

  // Define the email options
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender's email and name
    to: process.env.GMAIL_USER, // Replace with the recipient's email
    subject: "New Contact Form Submission", // Email subject
    text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `, // Plain text body of the email
    html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `, // HTML body of the email
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again.",
    };
  }
}
