import { Document, Schema } from "mongoose";

interface UserType extends Document {
  name: string;
  image?: string;
  email: string;
  emailVerified?: boolean;
  hashedPassword?: string;
  createdAt?: Date;
  updatedAt?: Date;
  favoriteIds?: Schema.Types.ObjectId[];
}

export default UserType;
