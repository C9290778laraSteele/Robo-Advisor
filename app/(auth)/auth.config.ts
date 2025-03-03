import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/',
  },
  trustHost: true, // 启用信任 host
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      return true;
    },
  },
} satisfies NextAuthConfig;
