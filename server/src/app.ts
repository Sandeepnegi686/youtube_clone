import express, { Express, Request, Response } from "express";
import { connect } from "mongoose";
require("dotenv").config();

const app: Express = express();
const DB = process.env.DB_URL || "";
const PORT = process.env.PORT || 0;

app.get("/", (req: Request, res: Response) => res.send("hello from Ts - node"));

app.listen(PORT, () => {
  console.log("Server started");
  connect(DB)
    .then(() => console.log("Database Connected."))
    .catch((e) => {
      console.log(e);
      process.exit(1);
    });
});
