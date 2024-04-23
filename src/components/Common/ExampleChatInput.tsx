import Image from 'next/image'
import brain from 'p/brain.svg'
import React from 'react'
import send from 'p/send-2.svg'
import { IconButton } from '@/components/Common/IconButton'

interface InputProps {
    disabled?: boolean
}
export const ExampleChatInput = ({ disabled }: InputProps) => {
    const iconClass = !disabled
        ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500'
        : ''

    return (
        <div className="relative">
            <Image
                className="absolute left-6 bottom-0 -translate-y-[20px]"
                src={brain}
                alt="icon"
            />
            <input
                className="h-[60px] w-[100%] pr-20 pl-14 py-2 rounded-[30px] font-thin mt-2 shadow outline-none placeholder:font-thin"
                type="text"
                placeholder="What’s in your mind?..."
                disabled={!!disabled}
            />
            <IconButton
                iconButtonClass="absolute right-2.5 bottom-0 -translate-y-[7px] bg-indigo-600 hover:bg-indigo-800 w-[46px] h-[46px] "
                icon={send}
                iconClass={iconClass}
            />
        </div>
    )
}
