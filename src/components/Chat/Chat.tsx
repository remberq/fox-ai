import ChatOverlay from '@/components/Chat/ChatOverlay/ChatOverlay'
import CHatForm from '@/components/Chat/ChatForm/ChatForm'

export default function Chat() {
    return (
        <div className="flex flex-row">
            <ChatOverlay />
            <CHatForm />
        </div>
    )
}
