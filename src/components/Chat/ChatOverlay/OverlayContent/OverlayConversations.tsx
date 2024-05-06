'use client'
import ConversationRow from '@/components/Common/ConversationRow'
import MouseFollowElement from '@/components/Common/MouseFollowElement'
import { useGetShadow } from '@/components/Hooks/ScrollHooks'
import './Chat.scss'
import { useGetConversationId } from '@/components/Hooks/hooks'
import type { IChat } from '@/types/ChatTypes'

export default function OverlayConversations({ chats }: { chats: IChat[] }) {
    const showTopShadow = useGetShadow('shadow-element')
    const shadowStyle = showTopShadow ? 'shadow-top' : ''
    const chatId = useGetConversationId()

    const renderConversationRow = () =>
        chats?.map((conversation) => (
            <ConversationRow
                key={conversation.id}
                conversation={conversation}
                isActive={Number(chatId) === conversation.id}
            />
        ))

    return (
        <>
            <div
                id="chat-element"
                className={`relative pt-6 pl-2 h-[55%] pb-6 shadow-bottom ${shadowStyle}`}
            >
                <div
                    id="shadow-element"
                    className="flex flex-col gap-2 h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
                >
                    {renderConversationRow()}
                    {!!chats?.length && (
                        <MouseFollowElement contentElementId="chat-element" />
                    )}
                </div>
            </div>
        </>
    )
}
