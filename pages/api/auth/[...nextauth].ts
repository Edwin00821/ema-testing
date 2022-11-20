import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';

import { searchUserByEmailOfDB } from 'database/Entities';

export default NextAuth({
  providers: [
    Credentials({
      name: 'Custom Login',
      credentials: {
        email: {
          label: 'Correo:',
          type: 'email',
          placeholder: 'correo@google.com',
        },
        password: {
          label: 'Contraseña:',
          type: 'password',
          placeholder: 'Contraseña',
        },
      },
      async authorize(credentials) {
        console.log({ credentials });
        const [searchUser] = await searchUserByEmailOfDB(credentials!.email);
        const validPassword = bcrypt.compareSync(
          credentials!.password,
          searchUser.password_user
        );
        return {
          email: searchUser.correo_user,
          password: searchUser.password_user,
        };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],

  // pages: {
  //   signIn: '/login',
  //   newUser: '/register',
  // },
  session: {
    maxAge: 3600,
    strategy: 'jwt',
    updateAge: 1200,
  },

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case 'oauth':
            // token.user = await dbUsers.oAUthToDbUser(
            //   user?.email || '',
            //   user?.name || ''
            // );
            break;

          case 'credentials':
            token.user = user;
            break;
        }
      }

      return token;
    },

    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.user = token.user as any;
      return session;
    },
  },
});
