import Image from 'next/image'
import messageIcon from 'p/message.svg'
import trashIcon from 'p/trash.svg'
import editIcon from 'p/edit.svg'
import { useRouter } from 'next/navigation'
import './Style.scss'
interface Props {
    conversation: {
        id: string
        text: string
    }
    isActive?: boolean
}
export default function ConversationRow({ conversation, isActive }: Props) {
    const router = useRouter()
    const styles = isActive ? 'bg-blue-50 rounded-l-[20px]' : 'w-full'
    const st = isActive ? 'w-32' : 'w-0 translate-x-6 '
    const handleRowClock = () => {
        router.push(`?conversation=${conversation.id}`)
    }

    return (
        <div
            onClick={handleRowClock}
            className={`flex transition-all duration-500 relative flex-row items-center gap-3 hover:bg-blue-50 hover:rounded-l-[20px] cursor-pointer pl-6 ${styles}`}
        >
            <Image src={messageIcon} alt="message icon" />
            <span className="my-3 font-mono block w-full text-md truncate text-shadow pr-4">
                {conversation.text}
            </span>
            <div
                className={`bg-blue-200 pl-3 flex gap-4 items-center h-full rounded-l-3xl transition-all duration-300 ease-out ${st}`}
            >
                <Image
                    className="icon-animation"
                    src={trashIcon}
                    alt="trash icon"
                />
                <Image
                    className="icon-animation"
                    src={editIcon}
                    alt="edit icon"
                />
            </div>
        </div>
    )
}
