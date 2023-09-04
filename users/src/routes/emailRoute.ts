import { Router, Request, Response } from "express";
import emailController from "../controllers/emailController";

const router = Router();
const userController = new emailController();
router.post("/signup", userController.send_signup_email);

export default router;
