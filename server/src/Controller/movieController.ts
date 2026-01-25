import { Request, Response } from "express";
import MovieModel from "../Model/MovieModel";
import { Types } from "mongoose";

// declare global {
//   namespace Express {
//     interface Request {
//       user?: {
//         _id: Types.ObjectId | string;
//         name: string;
//         email: string;
//       } & Record<string, any>;
//     }
//   }
// }

async function getRandomMovie(_: Request, res: Response) {
  try {
    const count = await MovieModel.countDocuments();
    const randomNumber = Math.ceil(Math.random() * count) - 1; // 0 to (number of movies -1)
    const randomMovie = await MovieModel.find().limit(1).skip(randomNumber);

    return res.status(200).json({ s: true, d: randomMovie[0] });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ s: false, m: "Something went wrong.." });
  }
}
async function getAllMovies(_: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json({ s: true, d: movies });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ s: false, m: "Something went wrong.." });
  }
}
async function addFavoriteMovie(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ s: false, m: "Unauthorized" });
    }
    const user = req.user as any;
    const movies = await MovieModel.find();
    return res.status(200).json({ s: true, d: movies });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ s: false, m: "Something went wrong.." });
  }
}

export { getRandomMovie, getAllMovies, addFavoriteMovie };
