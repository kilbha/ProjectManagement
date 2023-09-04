import { Router, Request, Response } from "express";
import usercontroller from "../controllers/userController";
import verifytoken from "../middlewares/auth";
import { body } from "express-validator";
import verifyBsonId from "../middlewares/verifyBsonId";

const router = Router();
const userController = new usercontroller();

router.get("/", verifytoken, userController.get_users);
router.post(
  "/",
  [
    body("email").isEmail().withMessage("Invalid Email Address"),
    body("email").notEmpty().withMessage("Please provide EmailId"),
    body("firstName").notEmpty().withMessage("Please provide firstName"),
    body("lastName").notEmpty().withMessage("Please provide lastName"),
    body("orgName").notEmpty().withMessage("Please provide orgName"),
  ],
  userController.create_user
);
router.put(
  "/:id",
  [verifytoken, verifyBsonId],
  [
    body("email").isEmail().withMessage("Invalid Email Address"),
    body("email").notEmpty().withMessage("Please provide EmailId"),
    body("firstName").notEmpty().withMessage("Please provide firstName"),
    body("lastName").notEmpty().withMessage("Please provide lastName"),
    body("orgName").notEmpty().withMessage("Please provide orgName"),
  ],
  userController.update_user
);
router.delete("/:id", [verifytoken, verifyBsonId], userController.delete_user);

export default router;
