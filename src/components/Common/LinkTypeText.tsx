import Link from 'next/link'

interface Props {
    text: string
    onClick: () => void
    restClassName?: string
    href: string
}
export default function LinkTypeText({
    text,
    onClick,
    restClassName,
    href,
}: Props) {
    // TODO: Убрать линк
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`font-medium text-blue-600 cursor-pointer hover:text-blue-800 ${restClassName}`}
        >
            {text}
        </Link>
    )
}
