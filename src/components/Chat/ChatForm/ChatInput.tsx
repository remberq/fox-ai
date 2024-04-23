import Image from 'next/image'
import brain from 'p/brain.svg'
import { IconButton } from '@/components/Common/IconButton'
import send from 'p/send-2.svg'
import React from 'react'

const disabled = false
export default function ChatInput() {
    const iconClass = !disabled
        ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500'
        : ''

    return (
        <div className="absolute bottom-6 h-[60px] w-11/12 ">
            <div className="relative w-11/12 max-w-[500px] min-w-[320px] mx-auto">
                <Image
                    className="absolute left-6 bottom-0 -translate-y-[20px]"
                    src={brain}
                    alt="icon"
                />
                <input
                    className="h-[60px] w-[100%] pr-20 pl-14 bg-white py-2 rounded-[30px] font-thin shadow outline-none placeholder:font-thin"
                    type="text"
                    placeholder="What’s in your mind?..."
                    disabled={disabled}
                />
                <IconButton
                    iconButtonClass="absolute right-2.5 bottom-0 -translate-y-[7px] bg-indigo-600 hover:bg-indigo-800 w-[46px] h-[46px] "
                    icon={send}
                    iconClass={iconClass}
                />
            </div>
        </div>
    )
}
