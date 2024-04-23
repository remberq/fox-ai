'use client'
import { useSearchParams } from 'next/navigation'
import ConversationRow from '@/components/Common/ConversationRow'
import MouseFollowElement from '@/components/Common/MouseFollowElement'
import { useGetShadow } from '@/components/Hooks/ScrollHooks'
import './Chat.scss'

const conversations = [
    {
        id: '1',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '2',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '3',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '4',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '5',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '6',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '7',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '8',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '9',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '10',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '11',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '12',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '13',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
    {
        id: '14',
        text: 'Ты Реакт разработчик, с 10летним опытом',
    },
]
export default function OverlayConversations() {
    const showTopShadow = useGetShadow('shadow-element')
    const searchParams = useSearchParams()
    const shadowStyle = showTopShadow ? 'shadow-top' : ''
    const activeConversation = searchParams.get('conversation')

    const renderConversationRow = () =>
        conversations.map((conversation) => (
            <ConversationRow
                key={conversation.id}
                conversation={conversation}
                isActive={activeConversation === conversation.id}
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
                    <MouseFollowElement contentElementId="chat-element" />
                </div>
            </div>
        </>
    )
}
