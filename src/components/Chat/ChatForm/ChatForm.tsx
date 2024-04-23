import ChatInput from '@/components/Chat/ChatForm/ChatInput'
import CurrentChat from '@/components/Chat/ChatForm/CurrentChat/CurrentChat'

export default function CHatForm() {
    return (
        <div className="w-full h-screen p-6 relative">
            <div className=" w-3/4 h-full mx-auto p-6 relative">
                <CurrentChat />
                <ChatInput />
            </div>
        </div>
    )
}
