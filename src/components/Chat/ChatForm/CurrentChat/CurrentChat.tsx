'use client'
import '../ChatForm.scss'
import { useGetShadow } from '@/components/Hooks/ScrollHooks'
import ConversationHistory from '@/components/Chat/ChatForm/CurrentChat/ConversationHistory'
import { useEffect, useRef } from 'react'
import type { IMessages } from '@/types/ChatTypes'

interface Props {
    messages: {
        authorQuestion: IMessages[]
        aiAnswer: IMessages[]
    } | null
}

export default function CurrentChat({ messages }: Props) {
    const showTopShadow = useGetShadow('chat-shadow')
    const shadowStyle = showTopShadow ? 'shadow-top-chat' : ''
    const messageEl = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (messageEl.current && messages) {
            messageEl.current.scrollTop = messageEl.current.scrollHeight
        }
    }, [messages])

    if (!messages) {
        // TODO: Добавить загрузчик
        return <div>Loading...</div>
    }

    return (
        <div
            id="chat-shadow"
            ref={messageEl}
            className="flex scroll-smooth flex-row h-full justify-between overflow-y-scroll scrollbar-hide"
        >
            <div
                className={`w-full flex flex-col gap-10 shadow-bottom-chat ${shadowStyle}`}
            >
                <ConversationHistory {...messages} />
            </div>
        </div>
    )
}
