import { Document, Schema } from "mongoose";
import AccountType from "./AccountType";
import SessionType from "./SessionType";

interface UserType extends Document {
  name: string;
  image?: string;
  email: string;
  emailVerified?: boolean;
  hashedPassword?: string;
  createdAt?: Date;
  updatedAt?: Date;
  favoriteIds?: Schema.Types.ObjectId[];
  sessions?: SessionType[];
  accounts?: AccountType[];
}

export default UserType;
