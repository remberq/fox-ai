'use client'
import { Button } from '@/components/Common/Button'
import { IconButton } from '@/components/Common/IconButton'
import search from 'p/search-normal.svg'
import add from 'p/add.svg'
import { useRouter } from 'next/navigation'

export default function OverlayConversationHeader() {
    const router = useRouter()

    const handleButtonClick = () => {
        router.push('/chat')
    }

    return (
        <div className="p-6 flex flex-col h-[150px] justify-between">
            <h1 className="text-xl font-mono">FOX A.I +</h1>
            <div className="flex flex-row items-center justify-between h-[50px]">
                <Button
                    className="w-4/5 h-full bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-800 transition-colors duration-500 justify-center"
                    btnText="New Chat"
                    icon={add}
                    onClick={handleButtonClick}
                />
                <IconButton
                    iconButtonClass="bg-zinc-800 w-[50px] h-[50px]"
                    icon={search}
                />
            </div>
        </div>
    )
}
