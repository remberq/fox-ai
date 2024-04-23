import Image, { StaticImageData } from 'next/image'
interface Props {
    image: StaticImageData
    styles?: string
}
export const Avatar = ({ image, styles }: Props) => {
    return (
        <div className={`w-[34px] h-[34px] ${styles}`}>
            <Image
                className="rounded-[50%] object-fill"
                src={image}
                alt="User Avatar"
            />
        </div>
    )
}
