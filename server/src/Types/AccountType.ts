import mongoose, { Document, Types } from "mongoose";

interface AccountType extends Document {
  userId: string;
  type: Types.ObjectId;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  user?: [{ type: Types.ObjectId; ref: "User" }];
}

export default AccountType;
