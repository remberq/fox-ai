import Image from 'next/image'

interface Props {
    icon: string
    iconButtonClass?: string
    iconClass?: string
    size?: number
}
export const IconButton = ({ icon, iconButtonClass, iconClass }: Props) => {
    return (
        <div
            className={`group rounded-[50%] flex justify-center transition-colors duration-500 cursor-pointer ${iconButtonClass}`}
        >
            <Image className={iconClass} src={icon} alt="arrow" />
        </div>
    )
}
