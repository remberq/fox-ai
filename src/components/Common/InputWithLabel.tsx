'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import eye from 'p/eye.svg'
import { Controller } from 'react-hook-form'

interface InputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    name: string
    placeholder: string
    type: React.HTMLInputTypeAttribute
    label: string
    showIcon?: boolean
}
export const InputWithLabel = ({
    type,
    label,
    showIcon,
    className,
    ...inputProps
}: InputProps) => {
    const [inputType, setInputType] = useState(type)
    const handleIconClick = () => {
        setInputType(inputType === 'password' ? 'text' : 'password')
    }

    return (
        <div className="flex flex-col mb-4">
            <p className="text-start">{label}</p>

            <Controller
                rules={{
                    required: {
                        value: !!inputProps.required,
                        message: 'Field is required!',
                    },
                }}
                render={({ field, fieldState: { error } }) => {
                    const errorStyle = error
                        ? 'outline outline-red-500 focus:outline-1 focus:outline-orange-500'
                        : ''

                    return (
                        <>
                            <div className="relative">
                                <input
                                    {...inputProps}
                                    {...field}
                                    className={`h-[60px] w-[100%] font-thin px-4 py-2 rounded-xl mt-2 bg-zinc-100 outline-[1px] focus:outline-0 border-none focus:border-none placeholder:font-thin ${className} ${errorStyle}`}
                                    type={inputType}
                                />
                                {showIcon && (
                                    <Image
                                        onClick={handleIconClick}
                                        className="absolute right-4 bottom-0  -translate-y-[20px] cursor-pointer"
                                        src={eye}
                                        alt="password hide/show"
                                    />
                                )}
                            </div>
                            {error && (
                                <p className="font-thin text-xs text-red-500">
                                    {error.message}
                                </p>
                            )}
                        </>
                    )
                }}
                name={inputProps.name}
            />
        </div>
    )
}
