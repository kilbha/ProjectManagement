import { Request, Response } from "express";
import emailService from "../utils/email";

class emailController {
  emailservice: emailService = new emailService();

  send_signup_email = async (req: Request, res: Response) => {
    try {
      const { toEmail, html, subject } = req.body;
      let messageId = await this.emailservice.send_email(
        toEmail,
        html,
        subject
      );
      if (messageId) {
        res
          .status(200)
          .json({ message: "sent email successfully", messageId: messageId });
      } else {
        res.status(500).json({ message: "server error" });
      }
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  };
}

export default emailController;
