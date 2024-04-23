import QuestionToAI from '@/components/Chat/ChatForm/CurrentChat/QuestionToAI'
import { DividerWithText } from '@/components/Common/DividerWithText'
import AIModelBadge from '@/components/Chat/ChatForm/CurrentChat/AIModelBadge'
import AIAnswer from '@/components/Chat/ChatForm/CurrentChat/AIAnswer'
import ConversationFooter from '@/components/Chat/ChatForm/CurrentChat/ConversationFooter'

interface Props {
    className?: string
}
export default function ConversationHistory({ className }: Props) {
    return (
        <div className={className}>
            <QuestionToAI />
            <div className="px-[34px]">
                <DividerWithText />
            </div>
            <AIModelBadge />
            <AIAnswer />
            <ConversationFooter />
        </div>
    )
}
