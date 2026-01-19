import { Document, Types } from "mongoose";

export default interface SessionType extends Document {
  sessionToken: string;
  userId: Types.ObjectId;
  expires: Date;
}
