import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const checkJson = (req: any, res: any, next: any) => {
  const properjson = JSON.parse(req.body);
  if (!properjson) {
    res.status(400).json({ message: "Provide valid json" });
  }
  next();
};

export default checkJson;
