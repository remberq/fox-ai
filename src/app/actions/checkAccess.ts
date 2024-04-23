import { redirect } from 'next/navigation'
import { DefaultSession, Session } from 'next-auth'

export const checkAccess = async (session: Session | null) => {
    if (session && session.user) {
        if (isUserAllow(session.user)) {
            redirect('chat')
        } else {
            redirect('auth-error')
        }
    }
}

const isUserAllow = (user: DefaultSession['user']) => {
    const allowedUsers = [
        'rember.out@gmail.com',
        'kikienelsone@gmail.com',
        'crab@crab.crab',
        'fox@fox.fox',
    ]

    return allowedUsers.includes(user?.email ?? '')
}
