import Image from 'next/image'
import arrowDown from 'p/arrow-blue.svg'

export default function AIModelBadge() {
    return (
        <div className="flex flex-row gap-2 justify-start text-blue-700 bg-transparent items-center w-[120px] h-[30px] rounded-[40px] ml-[36px] mt-3">
            <span className="font-thin italic text-sm">FOX A.I +</span>
            <Image src={arrowDown} alt="Arrow" />
        </div>
    )
}
