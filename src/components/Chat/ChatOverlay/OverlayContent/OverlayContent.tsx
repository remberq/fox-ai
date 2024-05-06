import OverlayConversationHeader from '@/components/Chat/ChatOverlay/OverlayContent/OverlayConversationHeader'
import { DividerWithText } from '@/components/Common/DividerWithText'
import DeleteChatConversation from '@/components/Chat/ChatOverlay/OverlayContent/DeleteChatConversation'
import OverlayConversations from '@/components/Chat/ChatOverlay/OverlayContent/OverlayConversations'
import OverlayConversationFooter from '@/components/Chat/ChatOverlay/OverlayContent/OverlayConversationFooter'
import { getChats } from '@/app/actions/chat.actions'
import { Chat } from '@prisma/client'

export default async function OverlayContent() {
    const chats: Chat[] = await getChats()

    return (
        <div className="h-screen p-6">
            <div className="w-[400px] h-full rounded-3xl bg-white shadow-xl shadow-zinc-400">
                <OverlayConversationHeader />
                <DividerWithText />
                <DeleteChatConversation />
                <DividerWithText />
                <OverlayConversations chats={chats} />
                <OverlayConversationFooter />
            </div>
        </div>
    )
}
