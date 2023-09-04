"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifytoken = (req, res, next) => {
    const token = req.headers.auth;
    if (!token) {
        res.status(400).json({ message: "Token not provided" });
    }
    jsonwebtoken_1.default.verify(token, process.env.secret_key, (error, decoded) => {
        if (error) {
            res.status(401).json({ message: "Unauthorized" });
        }
        req.user = decoded;
        next();
    });
};
exports.default = verifytoken;
