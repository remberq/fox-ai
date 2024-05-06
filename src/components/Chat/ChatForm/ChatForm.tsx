import ChatInput from '@/components/Chat/ChatForm/ChatInput'
import CurrentChat from '@/components/Chat/ChatForm/CurrentChat/CurrentChat'
import { getChatMessages } from '@/app/actions/message.actions'

export interface ChatPropsPage {
    chatId?: string
}

export default async function ChatForm({ chatId }: ChatPropsPage) {
    const messages = chatId ? await getChatMessages(chatId) : null

    return (
        <div className="w-full h-screen p-6 relative">
            <div className=" w-3/4 h-full mx-auto p-6 relative">
                <CurrentChat messages={messages} />
                <ChatInput chatId={chatId} />
            </div>
        </div>
    )
}
