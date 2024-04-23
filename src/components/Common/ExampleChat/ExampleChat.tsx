import { ExampleChatBadge } from '@/components/Common/ExampleChat/ExampleChatBadge'
import { ExampleAnswerByAI } from '@/components/Common/ExampleChat/ExampleAnswerByAI'
import { ExampleGroupButtons } from '@/components/Common/ExampleChat/ExampleGroupButtons'

export const ExampleChat = () => {
    return (
        <div className="flex flex-row justify-between">
            <div className="w-[90%] flex flex-col gap-4">
                <ExampleChatBadge />
                <ExampleAnswerByAI />
            </div>
            <ExampleGroupButtons />
        </div>
    )
}
