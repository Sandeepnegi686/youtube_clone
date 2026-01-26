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

async function getFavMovieByUser(req: Request, res: Response) {
  try {
    const user = req.user as any;
    const person = await UserModel.findById(user._id).populate("favoriteIds")!;

    if (!person) {
      return res.status(400).json({ s: false, m: "user not found" });
    }

    return res.status(200).json({ s: true, d: person.favoriteIds });
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
    const req_user = req.user as any;
    const movieId = req?.body?.favoriteMovieId;
    if (!mongoose.Types.ObjectId.isValid(movieId)) {
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

async function removeFavoriteMovie(
  req: Request<{}, {}, { favoriteMovieId: string }, {}>,
  res: Response,
) {
  try {
    const req_user = req.user as any;
    const movieId = req?.body?.favoriteMovieId;
    if (!mongoose.Types.ObjectId.isValid(movieId)) {
      return res.status(400).json({ s: false, m: "unknown book Id" });
    }
    const userId = req_user._id;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        $pull: { favoriteIds: movieId },
      },
      { new: true },
    );
    console.log(updatedUser);
    return res
      .status(200)
      .json({ s: true, m: "Movie Removed", d: updatedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ s: false, m: "Something went wrong.." });
  }
}

export {
  getRandomMovie,
  getAllMovies,
  addFavoriteMovie,
  removeFavoriteMovie,
  getFavMovieByUser,
};
