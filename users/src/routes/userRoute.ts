import { Router, Request, Response } from "express";
import usercontroller from "../controllers/userController";

const router = Router();
const userController = new usercontroller();
router.get("/", userController.get_users);
router.post("/", userController.create_user);
router.put("/:id", userController.update_user);
router.delete("/:id", userController.delete_user);

export default router;
