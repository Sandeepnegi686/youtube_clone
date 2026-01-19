import { Document } from "mongoose";

export default interface VerificationTokenType extends Document {
  identifier: { type: String };
  token: { type: String };
  expires: { type: Date };
}
