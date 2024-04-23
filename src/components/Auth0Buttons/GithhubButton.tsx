'use client'
import { Button } from '@/components/Common/Button'
import github from 'p/gh.svg'
import { signIn } from 'next-auth/react'

export const GithubButton = () => {
    const handleClick = async () => {
        const res = await signIn('github', { redirect: false })

        console.log(res)
    }
    return (
        <Button
            onClick={handleClick}
            btnText="Continue with GitHub"
            className="justify-center before:ease shadow-xl transition-all hover:shadow-indigo-300 h-[60px]"
            icon={github}
        />
    )
}
