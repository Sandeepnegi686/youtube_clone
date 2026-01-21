import express, { Express, NextFunction, Request, Response } from "express";
import { loginUser, signUp } from "../Controller/auth";
import passport from "passport";
import jwt from "jsonwebtoken";
import authenticateUser from "../middleware/authMiddleware";

const router = express.Router();
const CLIENT_URL = process.env.CLIENT_URL || "";
const JWT_SECRET = process.env.JWT_SECRET || "";

router.post("/signup", signUp);
router.post("/login", loginUser);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth", session: false }),
  (req: Request, res: Response) => {
    // Successful authentication, redirect home.
    // {_id: string, email: string}
    try {
      if (!req.user) return res.status(401);
      const data = { _id: req.user._id, email: req.user.email };
      const token = jwt.sign(data, JWT_SECRET, {
        expiresIn: 60 * 60 * 24, // 1 day
      });
      res.redirect(`${CLIENT_URL}/auth-success?token=${token}`);
    } catch (error) {
      res.redirect(`${CLIENT_URL}/auth?login=google-login-failed`);
      console.log(error);
    }
    res.redirect(`${CLIENT_URL}/auth`);
  },
);

router.get("/me", authenticateUser, (req: Request, res: Response) => {
  return res.status(200).json({ s: true, d: req.user });
});

export default router;
