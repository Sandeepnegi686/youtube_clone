import { Document } from "mongoose";

export default interface MovieType extends Document {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}
