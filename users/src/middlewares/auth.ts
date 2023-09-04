import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const verifytoken = (req: any, res: Response, next: any) => {
  const token = req.headers.auth!;
  if (!token) {
    res.status(400).json({ message: "Token not provided" });
  }
  jwt.verify(token, process.env.secret_key!, (error: any, decoded: any) => {
    if (error) {
      res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decoded;
    next();
  });
};

export default verifytoken;
