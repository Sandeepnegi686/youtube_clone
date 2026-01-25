import { model, Schema } from "mongoose";
import MovieType from "../types/MovieType";

const schema = new Schema<MovieType>({
  title: { type: String },
  description: { type: String },
  videoUrl: { type: String },
  thumbnailUrl: { type: String },
  genre: { type: String },
  duration: { type: String },
});

export default model<MovieType>("Movie", schema);
