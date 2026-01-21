import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import UserModel from "../Model/UserModel";
import passport from "passport";
import UserType from "../Types/UserType";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/api/v1/auth/google/callback",
    },
    async (_, __, profile, cb) => {
      console.log(profile);
      const email = profile.emails ? profile.emails?.[0].value : "";
      try {
        let user: UserType | null = await UserModel.findOne({
          email: profile.id,
        });
        if (!user) {
          user = await UserModel.create({
            name: profile.displayName,
            image: profile.displayName,
            email: email,
            emailVerified: true,
          });
        }
        return cb(null, user);
      } catch (error) {
        console.log(error);
        return cb(error, undefined);
      }
    },
  ),
);
