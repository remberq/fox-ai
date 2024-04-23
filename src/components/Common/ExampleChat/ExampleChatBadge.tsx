import arrowDown from 'p/arrow-down.svg'
import Image from 'next/image'

export const ExampleChatBadge = () => {
    return (
        <div className="flex flex-row gap-2 justify-center text-white bg-indigo-400 items-center w-[120px] h-[30px] rounded-[40px] border border-indigo-300">
            <span className="font-thin text-sm">FOX A.I +</span>
            <Image src={arrowDown} alt="Arrow" />
        </div>
    )
}
