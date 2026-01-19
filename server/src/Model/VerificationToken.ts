import { model, Schema } from "mongoose";
import VerificationTokenType from "../Types/VerificationTokenType";

const schema = new Schema<VerificationTokenType>({
  identifier: { type: String, unique: true },
  token: { type: String, unique: true },
  expires: { type: Date },
});

export default model<VerificationTokenType>("Verfication", schema);
