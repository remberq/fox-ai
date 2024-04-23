import { IconButton } from '@/components/Common/IconButton'
import editIcon from 'p/edit.svg'
import { Avatar } from '@/components/Common/Avatar'
import avatar from 'p/av.jpeg'

export default function QuestionToAI() {
    return (
        <div className="flex flex-row justify-between items-center font-mono text-xs mb-3">
            <Avatar styles="w-[28px] h-[28px]" image={avatar} />
            <span className="w-11/12 truncate ml-2">
                Create a chatbot gpt using python language what will be step for
                that? asdas das d as da s dasd
            </span>
            <IconButton
                icon={editIcon}
                iconButtonClass="ml-2 bg-rose-50 rounded-[15px] w-[30px] h-[30px]"
            />
        </div>
    )
}
