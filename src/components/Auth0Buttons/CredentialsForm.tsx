'use client'
import { InputWithLabel } from '@/components/Common/InputWithLabel'
import { Button } from '@/components/Common/Button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Snackbar from '@mui/joy/Snackbar'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'

interface FormData {
    email: string
    password: string
}

export const CredentialsForm = () => {
    const [open, setOpen] = useState(false)
    const route = useRouter()
    const formMethods = useForm<FormData>({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
        },
    })
    const {
        handleSubmit,
        formState: { isSubmitting, isValid, isSubmitted },
    } = formMethods

    // const isHasAnyErrors = !!Object.keys(errors).length

    const formAuth: SubmitHandler<FormData> = async (formData) => {
        const response = await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            redirect: false,
        })

        if (response?.ok) {
            route.push('chat')
        } else if (response?.error === 'CredentialsSignin') {
            setOpen(true)
        }
    }

    return (
        <FormProvider {...formMethods}>
            <div className="mt-4 w-full">
                <InputWithLabel
                    label="Email Address*"
                    placeholder="ex.email@expample.com"
                    type="text"
                    name="email"
                    required
                />
                <InputWithLabel
                    label="Password*"
                    placeholder="Enter password"
                    type="password"
                    name="password"
                    required
                    showIcon
                />
                <Button
                    loading={isSubmitting}
                    error={!isValid && isSubmitted}
                    onClick={handleSubmit(formAuth)}
                    type="submit"
                    btnText="Sign up"
                    className="w-full h-[60px] mt-6 bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-800 transition-colors duration-500 justify-center"
                />
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={4000}
                    open={open}
                    variant="outlined"
                    color="danger"
                    onClose={(event, reason) => {
                        if (reason === 'clickaway') {
                            return
                        }
                        setOpen(false)
                    }}
                >
                    У вас нет доступа к чату
                </Snackbar>
            </div>
        </FormProvider>
    )
}
