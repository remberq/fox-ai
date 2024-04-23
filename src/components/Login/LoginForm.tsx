import { LoginContent } from '@/components/Login/LoginContent'

export const LoginForm = () => {
    return (
        <div className="w-1/2 flex items-center bg-white">
            <div className="w-1/2 h-4/5 text-center mx-auto flex flex-col gap-4">
                <LoginContent />
            </div>
        </div>
    )
}
