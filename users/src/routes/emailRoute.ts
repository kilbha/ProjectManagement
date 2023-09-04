import { Router, Request, Response } from "express";
import emailController from "../controllers/emailController";
import { body, validationResult } from "express-validator";
const router = Router();
const userController = new emailController();
router.post(
  "/signup",
  [
    body("toEmail").isEmail().withMessage("Invalid Email Address"),
    body("toEmail").notEmpty().withMessage("Please provide EmailId"),
    body("subject").notEmpty().withMessage("Please provide subject of email"),
    body("html").notEmpty().withMessage("Please provide body of email"),
    body("exp").notEmpty().withMessage("Please provide expiry of token"),
    body("role").notEmpty().withMessage("Please provide role of user"),
  ],
  userController.send_signup_email
);

export default router;
