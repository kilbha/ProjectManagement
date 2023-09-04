import nodemailer from "nodemailer";
import Mail, { Address } from "nodemailer/lib/mailer";
import utils from "./utilsService";

class emailService {
  send_email = async (
    to: (string | Address)[],
    html: string,
    subject: string,
    role: string,
    exp: string
  ): Promise<string | null> => {
    // Create a promise to wrap the sendMail callback
    return new Promise((resolve, reject) => {
      var utilsInstance = new utils();
      const token = utilsInstance.get_jwt_token(to, role, exp);
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
        html: `http://localhost:4200/signup?token=${token}`,
        from: process.env.fromemail!,
        to: to,
        subject: subject,
      };
      transporter.sendMail(
        details,
        (
          error: any,
          info: { messageId: string | PromiseLike<string | null> | null }
        ) => {
          if (error) {
            console.error("Error sending an email", error.message);
            reject(error); // Reject the promise with the error
          } else {
            console.log("Sent email successfully", info.messageId);
            resolve(info.messageId); // Resolve the promise with the messageId
          }
        }
      );
    });
  };
}

export default emailService;
