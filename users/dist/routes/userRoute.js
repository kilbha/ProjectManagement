"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const express_validator_1 = require("express-validator");
const verifyBsonId_1 = __importDefault(require("../middlewares/verifyBsonId"));
const router = (0, express_1.Router)();
const userController = new userController_1.default();
router.get("/", auth_1.default, userController.get_users);
router.post("/", [
    (0, express_validator_1.body)("email").isEmail().withMessage("Invalid Email Address"),
    (0, express_validator_1.body)("email").notEmpty().withMessage("Please provide EmailId"),
    (0, express_validator_1.body)("firstName").notEmpty().withMessage("Please provide firstName"),
    (0, express_validator_1.body)("lastName").notEmpty().withMessage("Please provide lastName"),
    (0, express_validator_1.body)("orgName").notEmpty().withMessage("Please provide orgName"),
], userController.create_user);
router.put("/:id", [auth_1.default, verifyBsonId_1.default], [
    (0, express_validator_1.body)("email").isEmail().withMessage("Invalid Email Address"),
    (0, express_validator_1.body)("email").notEmpty().withMessage("Please provide EmailId"),
    (0, express_validator_1.body)("firstName").notEmpty().withMessage("Please provide firstName"),
    (0, express_validator_1.body)("lastName").notEmpty().withMessage("Please provide lastName"),
    (0, express_validator_1.body)("orgName").notEmpty().withMessage("Please provide orgName"),
], userController.update_user);
router.delete("/:id", [auth_1.default, verifyBsonId_1.default], userController.delete_user);
exports.default = router;
