import { LoginTitle } from '@/components/Login/LoginTitle'
import {
    CredentialsForm,
    GithubButton,
    GoogleButton,
} from '@/components/Auth0Buttons'
import { DividerWithText } from '@/components/Common/DividerWithText'

export const LoginContent = () => (
    <>
        <LoginTitle />
        <CredentialsForm />
        <DividerWithText text="Or better yet..." textPosition={50} />
        <GithubButton />
        <GoogleButton />
    </>
)
