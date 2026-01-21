import { JwtPayload } from "jsonwebtoken";

interface AuthPayload extends JwtPayload {
  _id: string;
  email: string;
}

export default AuthPayload;
