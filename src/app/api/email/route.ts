import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(request: Request): Promise<Response> {
  try {
    const data = await request.formData();
    const email = data.get("email") as string;
    const username = data.get("name") as string;
    const message = data.get("message") as string;

    console.log("form data", {
      email,
      username,
      message,
    });

    if (!email || !username || !message) {
      return Response.json({
        message: "Missing required fields",
      });
    }

    const publicEmail = process.env.NEXT_PUBLIC_EMAIL as string;
    const mailerSend = new MailerSend({
      apiKey: process.env.NEXT_PUBLIC_MAILERSEND_API_KEY as string,
    });
    const sender = process.env.NEXT_PUBLIC_EMAIL_USER as string;
    const sentFrom = new Sender(sender, "Inquiry from Portfolio Site");
    const recipients = [new Recipient(publicEmail, username)];
    const html = String.raw;
    const emailMessage = html`
      <html>
        <head>
          <title>Email Inquiry</title>
        </head>
        <body
          style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; color: #333;"
        >
          <div
            style="max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"
          >
            <h2 style="color: #007bff; text-align: center;">
              Inquiry Received
            </h2>
            <p><strong>Inquiry from:</strong> ${username}</p>
            <p>
              <strong>Email:</strong>
              <a href="mailto:${email}" style="color: #007bff;">${email}</a>
            </p>
            <div
              style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff; margin: 20px 0;"
            >
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
            </div>
            <footer
              style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;"
            >
              <p style="font-size: 14px; color: #666;">Sup fam</p>
            </footer>
          </div>
        </body>
      </html>
    `;

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(`Inquiry from ${username}`)
      .setHtml(emailMessage)
      .setText("Hello world?");

    const emailSent = await mailerSend.email.send(emailParams);
    console.log(emailSent);

    return Response.json({
      message: "Email sent",
      emailSent: emailSent,
    });
  } catch (error) {
    return Response.json({
      message: "Email failed to send",
      error: error,
    });
  }
}
