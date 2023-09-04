import nodemailer from "nodemailer";
import Mail, { Address } from "nodemailer/lib/mailer";

class emailService {
  send_email = async (
    to: (string | Address)[],
    html: string,
    subject: string
  ): Promise<any> => {
    const transporter = nodemailer.createTransport({
      host: process.env.emailhost,
      port: 465,
      auth: {
        user: process.env.fromemail,
        pass: process.env.password,
      },
      secure: true,
    });
    const details = {
      html: html,
      from: process.env.fromemail!,
      to: to,
      subject: subject,
    };
    await transporter.sendMail(details, (error, info) => {
      if (error) {
        console.error("Error sending an email");
        return null;
      } else {
        console.log("Sent email successfully", info.messageId);
        return info.messageId;
      }
    });
  };
}

export default emailService;
