import { Request, Response } from "express";

class usercontroller {
  get_users = (req: Request, res: Response) => {
    res.json({ message: "users get api is working.." });
  };

  create_user = (req: Request, res: Response) => {
    res.json({ message: "users post api is working.." });
  };

  update_user = (req: Request, res: Response) => {
    res.json({ message: "users update api is working.." });
  };

  delete_user = (req: Request, res: Response) => {
    res.json({ message: "users delete api is working.." });
  };
}

export default usercontroller;
