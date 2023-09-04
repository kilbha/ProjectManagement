import nodemailer from "nodemailer";
import Mail, { Address } from "nodemailer/lib/mailer";

class emailService {
  send_email = async (
    to: (string | Address)[],
    html: string,
    subject: string
  ): Promise<string | null> => {
    // Create a promise to wrap the sendMail callback
    return new Promise((resolve, reject) => {
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
      transporter.sendMail(details, (error, info) => {
        if (error) {
          console.error("Error sending an email");
          reject(error); // Reject the promise with the error
        } else {
          console.log("Sent email successfully", info.messageId);
          resolve(info.messageId); // Resolve the promise with the messageId
        }
      });
    });
  };
}

export default emailService;
