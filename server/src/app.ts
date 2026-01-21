import express, { Express, Request, Response } from "express";
import { connect } from "mongoose";
require("dotenv").config();

import authRouter from "./Routes/authRoute";

const app: Express = express();
const DB = process.env.DB_URL || "";
const PORT = process.env.PORT || 0;

app.use(express.json());

app.get("/", (_: Request, res: Response) => res.send("hello from Ts - node"));

app.use("/api/v1/auth/", authRouter);

app.listen(PORT, () => {
  console.log("Server started at port :", PORT);
  connect(DB)
    .then(() => console.log("Database Connected."))
    .catch((e) => {
      console.log(e);
      process.exit(1);
    });
});
