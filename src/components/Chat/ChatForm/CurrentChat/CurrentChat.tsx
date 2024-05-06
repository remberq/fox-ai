'use client'
import '../ChatForm.scss'
import { useGetShadow } from '@/components/Hooks/ScrollHooks'
import { Messages } from '@prisma/client'
import ConversationHistory from '@/components/Chat/ChatForm/CurrentChat/ConversationHistory'

interface Props {
    messages: {
        authorQuestion: Messages[]
        aiAnswer: Messages[]
    } | null
}

export default function CurrentChat({ messages }: Props) {
    const showTopShadow = useGetShadow('chat-shadow')
    const shadowStyle = showTopShadow ? 'shadow-top-chat' : ''

    if (!messages) {
        // TODO: Добавить загрузчик
        return <div>Loading...</div>
    }

    return (
        <div
            id="chat-shadow"
            className="flex flex-row h-full justify-between overflow-y-scroll scrollbar-hide"
        >
            <div
                className={`w-full flex flex-col gap-10 shadow-bottom-chat ${shadowStyle}`}
            >
                <ConversationHistory {...messages} />
            </div>
        </div>
    )
}
