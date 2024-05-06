import ChatForm from '@/components/Chat/ChatForm/ChatForm'

export default function CurrentChatPage({
    params,
}: {
    params: { id: string }
}) {
    return <ChatForm chatId={params.id} />
}
