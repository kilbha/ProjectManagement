"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailController_1 = __importDefault(require("../controllers/emailController"));
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
const userController = new emailController_1.default();
router.post("/signup", [
    (0, express_validator_1.body)("toEmail").isEmail().withMessage("Invalid Email Address"),
    (0, express_validator_1.body)("toEmail").notEmpty().withMessage("Please provide EmailId"),
    (0, express_validator_1.body)("subject").notEmpty().withMessage("Please provide subject of email"),
    (0, express_validator_1.body)("html").notEmpty().withMessage("Please provide body of email"),
], userController.send_signup_email);
exports.default = router;
