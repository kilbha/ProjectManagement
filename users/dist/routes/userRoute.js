"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const router = (0, express_1.Router)();
const userController = new userController_1.default();
router.get("/", auth_1.default, userController.get_users);
router.post("/", userController.create_user);
router.put("/:id", auth_1.default, userController.update_user);
router.delete("/:id", auth_1.default, userController.delete_user);
exports.default = router;
