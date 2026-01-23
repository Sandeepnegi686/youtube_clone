import mongoose from "mongoose";
import UserType from "../Types/UserType";

const Schema = new mongoose.Schema<UserType>(
  {
    name: { type: String },
    image: { type: String },
    email: { type: String, unique: true },
    emailVerified: { type: Boolean },
    hashedPassword: { type: String },
    favoriteIds: { type: [mongoose.Schema.Types.ObjectId] },
    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
    accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Account" }],
  },
  { timestamps: true },
);

export default mongoose.model<UserType>("User", Schema);
