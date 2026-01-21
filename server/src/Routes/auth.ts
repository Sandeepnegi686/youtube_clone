import express, { Express } from "express";
import { loginUser, signUp } from "../Controller/auth";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", loginUser);

export default router;
