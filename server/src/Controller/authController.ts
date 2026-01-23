import { Request, Response, NextFunction } from "express";
import UserModel from "../Model/UserModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

require("dotenv").config();

interface SignUpType {
  name: string;
  email: string;
  password: string;
}
interface LoginType {
  email: string;
  password: string;
}

const JWT_SECRET = process.env.JWT_SECRET || "";

async function signUp(req: Request<{}, {}, SignUpType, {}>, res: Response) {
  try {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
      return res.status(400).json({ s: false, m: "please provide all fields" });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ s: false, m: "email already exit" });
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const user = await UserModel.create({ name, hashedPassword, email });

    const data = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    const token = jwt.sign(data, JWT_SECRET, {
      expiresIn: 60 * 60 * 24,
    });

    res.cookie("access-token", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });

    return res.status(201).json({
      s: true,
      m: "user created",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ s: false, m: "something went wrong on the server" });
  }
}

async function loginUser(req: Request<{}, {}, LoginType, {}>, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ s: false, m: "please provide all fields" });
    }
    const existingUser = await UserModel.findOne({ email }).select(
      "+hashedPassword",
    );
    if (!existingUser) {
      return res.status(400).json({ s: false, m: "user not found" });
    }

    const compareHash = bcryptjs.compareSync(
      password,
      existingUser.hashedPassword!,
    );
    if (!compareHash) {
      return res.status(400).json({ s: false, m: "creds are wrong" });
    }

    const data = {
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
    };
    const token = jwt.sign(data, JWT_SECRET, {
      expiresIn: 60 * 60 * 24,
    });

    res.cookie("access-token", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      // sameSite: "lax",
    });
    return res.status(200).json({
      s: true,
      m: "logged in",
      user: {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ s: false, m: "something went wrong on the server" });
  }
}

async function signOut(req: Request, res: Response) {
  res.clearCookie("access-token");
  return res.json({ s: true, m: "logged out" });
}

export { signUp, loginUser, signOut };
