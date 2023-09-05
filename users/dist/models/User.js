"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        required: true,
        default: "Member",
    },
    designation: {
        type: String,
    },
    orgName: {
        type: String,
        required: true,
    },
    addedOn: {
        type: String,
        required: true,
        default: new Date().toUTCString(),
    },
    timezoneOffset: {
        type: Number,
        required: true,
        default: new Date().getTimezoneOffset() / -60,
    },
});
const userModel = mongoose_1.default.model("users", UserSchema);
exports.default = userModel;
