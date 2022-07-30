import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  database: process.env.MONGO_DB_URI,
  // To tell that nextjs must not track the session in the database,
  // instead it must use JWT
  session: {
    jwt: true,
  },
  jwt: {
    secret: "some-very-long-secret",
  },
});
