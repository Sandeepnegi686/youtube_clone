import express, { Router } from "express";
import {
  getAllMovies,
  getRandomMovie,
  addFavoriteMovie,
  removeFavoriteMovie,
  getFavMovieByUser,
  getMovieByIdFunc,
} from "../Controller/movieController";

const router: Router = express.Router();

router.get("/getRandomMovie", getRandomMovie);
router.get("/getAllMovies", getAllMovies);
router.get("/getFavMovieByUser", getFavMovieByUser);
router.post("/addFavoriteMovie", addFavoriteMovie);
router.post("/removeFavoriteMovie", removeFavoriteMovie);
router.get("/getMovieById/:movieId", getMovieByIdFunc);

export default router;
