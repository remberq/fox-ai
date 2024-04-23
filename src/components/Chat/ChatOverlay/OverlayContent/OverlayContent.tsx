import OverlayConversationHeader from '@/components/Chat/ChatOverlay/OverlayContent/OverlayConversationHeader'
import { DividerWithText } from '@/components/Common/DividerWithText'
import DeleteChatConversation from '@/components/Chat/ChatOverlay/OverlayContent/DeleteChatConversation'
import OverlayConversations from '@/components/Chat/ChatOverlay/OverlayContent/OverlayConversations'
import OverlayConversationFooter from '@/components/Chat/ChatOverlay/OverlayContent/OverlayConversationFooter'

export default function OverlayContent() {
    return (
        <div className="h-screen w-[400px] p-6">
            <div className="w-full h-full rounded-3xl bg-white shadow-xl shadow-zinc-400">
                <OverlayConversationHeader />
                <DividerWithText />
                <DeleteChatConversation />
                <DividerWithText />
                <OverlayConversations />
                <OverlayConversationFooter />
            </div>
        </div>
    )
}
