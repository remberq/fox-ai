import QuestionToAI from '@/components/Chat/ChatForm/CurrentChat/QuestionToAI'
import { DividerWithText } from '@/components/Common/DividerWithText'
import AIModelBadge from '@/components/Chat/ChatForm/CurrentChat/AIModelBadge'
import AIAnswer from '@/components/Chat/ChatForm/CurrentChat/AIAnswer'
import ConversationFooter from '@/components/Chat/ChatForm/CurrentChat/ConversationFooter'
import { Messages } from '@prisma/client'

interface Props {
    authorQuestion: Messages[]
    aiAnswer: Messages[]
}
export default function ConversationHistory({
    authorQuestion,
    aiAnswer,
}: Props) {
    const renderMessages = () => {
        return authorQuestion.map((author, index) => {
            const lastIndex = authorQuestion.length - 1 === index
            const className = lastIndex ? 'pb-24' : ''

            return (
                <div key={author.id} className={className}>
                    <QuestionToAI question={author.content} />
                    <div className="px-[34px]">
                        <DividerWithText />
                    </div>
                    <AIModelBadge />
                    <AIAnswer aiAnswer={aiAnswer[index].content} />
                    <ConversationFooter />
                </div>
            )
        })
    }
    return renderMessages()
}
