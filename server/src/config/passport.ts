import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import UserModel from "../Model/UserModel";
import passport from "passport";
import UserType from "../Types/UserType";

// const d = {
//   id: "114957008170214846553",
//   displayName: "Sandeep Negi",
//   name: { familyName: "Negi", givenName: "Sandeep" },
//   emails: [{ value: "hereissandeepnegi@gmail.com", verified: true }],
//   photos: [
//     {
//       value:
//         "https://lh3.googleusercontent.com/a/ACg8ocI4mz16CoUhoH7bGpyGAp-TJmxmNz-JCz46nHeF_jnuaH5aDA=s96-c",
//     },
//   ],
// };
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/api/v1/auth/google/callback",
    },
    async (_, __, profile, cb) => {
      // console.log(profile);
      const email = profile.emails ? profile.emails?.[0].value : "";
      const image = profile.photos ? profile.photos[0].value : "";
      try {
        let user: UserType | null = await UserModel.findOne({
          email: profile.id,
        });
        if (!user) {
          user = await UserModel.create({
            name: profile.displayName,
            image: image,
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

export default passport;
