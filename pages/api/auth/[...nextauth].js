import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";
import { sql_query } from '../../../lib/db';
import { compare } from 'bcryptjs'

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            async authorize(credentials, req) {
                const { email, password } = credentials;

                const user = await sql_query(`SELECT * FROM shoten_club.user WHERE email = ?`, [email]);
                if(!user) {
                    return null;
                }

                const passwordMatched = await compare(password, user[0].password);
                
                const results = {
                    name: user[0].name,
                    email: user[0].email
                }

                if(!passwordMatched) throw new Error('Invalid Email or Password');

                return results;
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
          session.user = token.user;
          return session;
        },
        async jwt({ token, user }) {
          if (user) {
            token.user = user;
          }
          return token;
        },
    },
    pages: {
        signIn: '/login',
        error: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET,
})