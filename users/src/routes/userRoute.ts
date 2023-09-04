import { Router, Request, Response } from "express";
import usercontroller from "../controllers/userController";
import verifytoken from "../middlewares/auth";
import verifyJson from "../middlewares/checkJson";

const router = Router();
const userController = new usercontroller();
router.get("/", verifytoken, userController.get_users);
router.post("/", userController.create_user);
router.put("/:id", verifytoken, userController.update_user);
router.delete("/:id", verifytoken, userController.delete_user);

export default router;
