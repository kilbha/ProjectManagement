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
const User_1 = __importDefault(require("../models/User"));
const express_validator_1 = require("express-validator");
class usercontroller {
    constructor() {
        this.get_users = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                res.setHeader("Content-Type", "application/json");
                const users = yield User_1.default.find();
                res.status(200).json(users);
            }
            catch (error) {
                console.error(error);
            }
        });
        this.create_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            try {
                const { firstName, lastName, email, password, orgName } = req.body;
                const user = new User_1.default({ firstName, lastName, email, password, orgName });
                yield user.save();
                res.status(201).json({ message: "user created", userid: user.id });
            }
            catch (error) {
                res.status(500).json({ message: "server error" });
            }
        });
        this.update_user = (req, res) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json({ message: "users update api is working.." });
        };
        this.delete_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.setHeader("Content-Type", "application/json");
            try {
                const id = req.params.id;
                yield User_1.default.findByIdAndDelete(id);
                return res.status(204).json({ message: "user deleted" });
            }
            catch (error) {
                return res.status(500).json({ message: "server error" });
            }
        });
    }
}
exports.default = usercontroller;
