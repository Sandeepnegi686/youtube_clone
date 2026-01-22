import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AuthPayload from "../Types/PayloadType";
const JWT_SECRET = process.env.JWT_SECRET || "";

function authenticateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ s: false, m: "unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ s: false, m: "unauthorized" });
    }
    const payload = jwt.verify(token, JWT_SECRET) as AuthPayload;

    req.user = { _id: payload._id, name: payload.name, email: payload.email };
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ s: false, m: "unauthorized" });
  }
}

export default authenticateUser;
