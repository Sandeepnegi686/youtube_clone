import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => res.send("hello from Ts - node"));

app.listen(5500, () => console.log("server started"));
