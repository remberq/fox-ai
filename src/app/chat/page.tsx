import { Suspense } from 'react'
import ChatForm from '@/components/Chat/ChatForm/ChatForm'

const ChatPage = () => {
    // TODO: Добавить загрузчик
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ChatForm />
        </Suspense>
    )
}

export default ChatPage
