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

interface AuthUserRequest extends Request {
  user: { _id: string; email: string };
}

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth", session: false }),
  function (req: AuthUserRequest, res: Response) {
    // Successful authentication, redirect home.
    try {
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

router.get("/me", authenticateUser);

export default router;
