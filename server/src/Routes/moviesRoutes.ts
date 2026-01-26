import express, { Router } from "express";
import {
  getAllMovies,
  getRandomMovie,
  addFavoriteMovie,
  removeFavoriteMovie,
  getFavMovieByUser,
} from "../Controller/movieController";

const router: Router = express.Router();

router.get("/getRandomMovie", getRandomMovie);
router.get("/getAllMovies", getAllMovies);
router.get("/getFavMovieByUser", getFavMovieByUser);
router.post("/addFavoriteMovie", addFavoriteMovie);
router.post("/removeFavoriteMovie", removeFavoriteMovie);

export default router;
