import { ExampleChatQuestionRow } from '@/components/Common/ExampleChat/ExampleChatQuestionRow'
import { ExampleChat } from '@/components/Common/ExampleChat/ExampleChat'
import { ExampleChatInput } from '@/components/Common/ExampleChatInput'

export const BannerExample = () => {
    return (
        <div className="flex flex-col gap-4">
            <ExampleChatQuestionRow />
            <ExampleChat />
            <ExampleChatInput disabled />
        </div>
    )
}
