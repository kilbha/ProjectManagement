"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emailService_1 = __importDefault(require("../utils/emailService"));
const express_validator_1 = require("express-validator");
class emailController {
    constructor() {
        this.emailservice = new emailService_1.default();
        this.send_signup_email = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    res.status(400).json({ errors: errors.array() });
                }
                else {
                    const { toEmail, html, subject, role, exp } = req.body;
                    let messageId = yield this.emailservice.send_email(toEmail, html, subject, role, exp);
                    if (messageId) {
                        res
                            .status(200)
                            .json({ message: "sent email successfully", messageId: messageId });
                    }
                    else {
                        res.status(500).json({ message: "server error" });
                    }
                }
            }
            catch (error) {
                res.status(500).json({ message: "server error" });
            }
        });
    }
}
exports.default = emailController;
