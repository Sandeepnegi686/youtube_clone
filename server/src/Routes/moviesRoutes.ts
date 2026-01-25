import express, { Router } from "express";
import {
  getAllMovies,
  getRandomMovie,
  addFavoriteMovie,
} from "../Controller/movieController";

const router: Router = express.Router();

router.get("/getRandomMovie", getRandomMovie);
router.get("/getAllMovies", getAllMovies);
router.post("/addFavoriteMovie", addFavoriteMovie);

export default router;
