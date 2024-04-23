import NextAuth, { NextAuthOptions, User } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

interface SecretUser extends User {
    password: string
}

const usersArray: SecretUser[] = [
    {
        id: 'FOX',
        name: 'Fox',
        email: 'fox@fox.fox',
        password: 'crab',
    },
    {
        id: 'CRAB',
        name: 'Crab',
        email: 'crab@crab.crab',
        password: 'fox',
    },
]
export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_SECRET_ID as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET_ID as string,
        }),
        Credentials({
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                    placeholder: 'Введите email',
                    required: true,
                },
                password: {
                    label: 'secret',
                    type: 'password',
                    placeholder: 'Введите пароль',
                    required: true,
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }
                const currentUser = usersArray.find(
                    (user) =>
                        user.email?.toUpperCase() ===
                        credentials.email.toUpperCase()
                )
                if (
                    currentUser &&
                    currentUser.password.toUpperCase() ===
                        credentials.password.toUpperCase()
                ) {
                    return currentUser as SecretUser
                }
                return null
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
    pages: {
        signIn: '/login',
        error: '/auth-error',
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
