'use client'
import LinkTypeText from '@/components/Common/LinkTypeText'
import { deleteAllChats } from '@/app/actions/chat.actions'

const handleClick = async () => {
    await deleteAllChats()
}

export default function DeleteChatConversation() {
    return (
        <div className="p-6 flex flex-row justify-between items-center">
            <span className="font-light text-zinc-600 text-sm">
                Your conversation
            </span>
            <LinkTypeText href="/chat" text="Clear all" onClick={handleClick} />
        </div>
    )
}
