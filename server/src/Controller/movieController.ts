import { Request, Response } from "express";
import MovieModel from "../Model/MovieModel";
import mongoose from "mongoose";
import UserModel from "../Model/UserModel";

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
async function addFavoriteMovie(
  req: Request<{}, {}, { favoriteMovieId: string }, {}>,
  res: Response,
) {
  try {
    if (!req.user) {
      return res.status(401).json({ s: false, m: "Unauthorized" });
    }
    const req_user = req.user as any;
    const movieId = req?.body?.favoriteMovieId;
    console.log(req.body);
    if (mongoose.Types.ObjectId.isValid(movieId)) {
      return res.status(400).json({ s: false, m: "unknown book Id" });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      req_user._id,
      {
        $addToSet: { favoriteIds: movieId },
      },
      { new: true },
    );
    return res.status(200).json({ s: true, m: "Movie Saved", d: updatedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ s: false, m: "Something went wrong.." });
  }
}

export { getRandomMovie, getAllMovies, addFavoriteMovie };
