import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const checkJson = (req: any, res: Response, next: any) => {
  const properjson = JSON.parse(JSON.stringify(req.body));
  console.log(properjson);
  next();
};

export default checkJson;
