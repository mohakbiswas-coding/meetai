import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
import { z } from "zod";

const authOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ 
            email: z.string().email(),
            password: z.string().min(1)
          })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        // TODO: Replace with your actual user authentication logic
        // This is just an example allowing any email/password
        if (email && password) {
          return {
            id: "1",
            email,
            name: email.split("@")[0],
          };
        }

        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };