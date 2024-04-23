'use client'
import { Button } from '@/components/Common/Button'
import { signIn } from 'next-auth/react'
import google from 'p/google.svg'

export const GoogleButton = () => {
    return (
        <Button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            btnText="Continue with Google"
            className="justify-center before:ease shadow-xl transition-all hover:shadow-indigo-300 h-[60px]"
            icon={google}
        />
    )
}
