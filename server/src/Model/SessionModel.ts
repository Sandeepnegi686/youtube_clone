import { model, Schema } from "mongoose";
import SessionType from "../Types/SessionType";

const schema = new Schema<SessionType>({
  sessionToken: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  expires: { type: Date },
});

export default model<SessionType>("Session", schema);
