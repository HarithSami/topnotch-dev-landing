interface SendContactEmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({ name, email, message }: SendContactEmailParams) {
  if (!process.env.BREVO_API_KEY) {
    console.error("BREVO_API_KEY is not defined");
    return { success: false, error: "Configuration error" };
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || "contact@topnotch-dev.com";
  const receiverEmail = process.env.BREVO_RECEIVER_EMAIL || "contact@topnotch-dev.com";

  const payload = {
    sender: { name: "TopNotch Dev Contact Form", email: senderEmail },
    to: [{ email: receiverEmail }],
    replyTo: { name, email: email },
    subject: `[Contact Form] New Message from ${name}`,
    htmlContent: `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #000; margin: 0;">
              ${message.replace(/\n/g, "<br>")}
            </blockquote>
            <br>
            <hr style="border: 0; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #888;">Sent from TopNotch Dev Landing Page</p>
          </div>
        </body>
      </html>
    `
  };

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Brevo API warning/error:", errorData);
      return { success: false, error: errorData };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error };
  }
}
