'use client'
import LinkTypeText from '@/components/Common/LinkTypeText'

export default function DeleteChatConversation() {
    return (
        <div className="p-6 flex flex-row justify-between items-center">
            <span className="font-light text-zinc-600 text-sm">
                Your conversation
            </span>
            <LinkTypeText
                text="Clear all"
                onClick={() => console.log('hihi')}
            />
        </div>
    )
}
