import { AuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";


const authOptions: AuthOptions = {
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID ?? "",
            clientSecret: process.env.TWITTER_CLIENT_SECRET ?? "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
};
export default authOptions;
