import { Request, Response } from "express";
import User from "../models/User";
import { validationResult } from "express-validator";
class usercontroller {
  get_users = async (req: Request, res: Response) => {
    try {
      res.setHeader("Content-Type", "application/json");
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
    }
  };

  create_user = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { firstName, lastName, email, password, orgName } = req.body;
      const user = new User({ firstName, lastName, email, password, orgName });

      await user.save();
      res.status(201).json({ message: "user created", userid: user.id });
    } catch (error: any) {
      res.status(500).json({ message: "server error" });
    }
  };

  update_user = (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ message: "users update api is working.." });
  };

  delete_user = async (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    try {
      const id = req.params.id;
      await User.findByIdAndDelete(id);
      return res.status(204).json({ message: "user deleted" });
    } catch (error) {
      return res.status(500).json({ message: "server error" });
    }
  };
}

export default usercontroller;
