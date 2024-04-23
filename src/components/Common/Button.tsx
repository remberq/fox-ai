import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import Image from 'next/image'
import CircularProgress from '@mui/joy/CircularProgress'
import errorIcon from 'p/error.svg'

interface Props
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    onClick?: () => void
    btnText?: string
    Content?: React.ReactNode
    icon?: string
    iconClassName?: string
    loading?: boolean
    error?: boolean
}

export const Button: React.FC<Props> = ({
    btnText,
    icon,
    className,
    Content,
    iconClassName,
    loading,
    error,
    ...restProps
}) => {
    const renderButtonText = () => {
        if (loading) {
            return (
                <CircularProgress size="sm" color="neutral" variant="plain" />
            )
        }
        if (error) {
            return (
                <Image
                    className={iconClassName}
                    src={errorIcon}
                    width={24}
                    height={24}
                    alt={'Error icon'}
                />
            )
        }

        return <span className="relative z-10 font-thin">{btnText}</span>
    }
    return (
        <button
            disabled={loading || error}
            className={`relative flex cursor-pointer flex-row gap-4 items-center 
            p-2 border border-neutral-300
             rounded-[30px]
            ${className}`}
            {...restProps}
        >
            {Content && Content}
            {icon && (
                <Image
                    className={iconClassName}
                    src={icon}
                    width={24}
                    height={24}
                    alt={btnText ?? 'icon button'}
                />
            )}
            {renderButtonText()}
        </button>
    )
}

//
// className={`flex flex-row gap-2 justify-center rounded-3xl
//             shadow-[0_4px_0_rgb(82,82,82)] transition-all
//             ease-out py-2 px-6 border border-black hover:translate-y-1
//             hover:shadow-[0_2px_0px_rgb(82,82,82)] active:translate-y-2
//             active:shadow-none ${className}`}
