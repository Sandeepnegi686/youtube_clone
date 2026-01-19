import { model, Schema } from "mongoose";
import AccountType from "../Types/AccountType";

const schema = new Schema<AccountType>({
  userId: { type: String },
  type: { type: Schema.Types.ObjectId, ref: "User" },
  provider: { type: String, unique: true },
  providerAccountId: { type: String, unique: true },
  refresh_token: { type: String },
  access_token: { type: String },
  expires_at: { type: Number },
  token_type: { type: String },
  scope: { type: String },
  id_token: { type: String },
  session_state: { type: String },

  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default model<AccountType>("Account", schema);
