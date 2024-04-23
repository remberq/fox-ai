import editIcon from 'p/editW.svg'
import { IconButton } from '@/components/Common/IconButton'

export const ExampleChatQuestionRow = () => {
    return (
        <div className="flex flex-row justify-between items-center text-white font-thin">
            <span className="overflow-ellipsis w-11/12 overflow-hidden text-nowrap">
                Create a chatbot gpt using python language what will be step for
                that
            </span>
            <IconButton
                icon={editIcon}
                iconButtonClass="border border-white w-[30px] h-[30px]"
            />
        </div>
    )
}
