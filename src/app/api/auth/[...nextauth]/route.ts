import NextAuth from "next-auth/next";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID ?? "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET ?? "",
    }),
  ],
};
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
