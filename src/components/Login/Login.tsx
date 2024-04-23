import { LoginBanner } from '@/components/Login/LoginBanner/LoginBanner'
import { LoginForm } from '@/components/Login/LoginForm'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { checkAccess } from '@/app/actions/checkAccess'

export const Login = async () => {
    const session = await getServerSession(authOptions)
    await checkAccess(session)

    return (
        <div className="flex flex-row p-5 min-h-screen relative">
            <LoginBanner />
            {!session && <LoginForm />}
        </div>
    )
}
