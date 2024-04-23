'use client'
import ConversationHistory from '@/components/Chat/ChatForm/CurrentChat/ConversationHistory'
import '../ChatForm.scss'
import { useGetShadow } from '@/components/Hooks/ScrollHooks'
export default function CurrentChat() {
    const showTopShadow = useGetShadow('chat-shadow')
    const shadowStyle = showTopShadow ? 'shadow-top-chat' : ''

    return (
        <div
            id="chat-shadow"
            className="flex flex-row h-full justify-between overflow-y-scroll scrollbar-hide"
        >
            <div
                className={`w-full flex flex-col gap-10 shadow-bottom-chat ${shadowStyle}`}
            >
                <ConversationHistory />
                <ConversationHistory />
                <ConversationHistory className="pb-24" />
            </div>
        </div>
    )
}
