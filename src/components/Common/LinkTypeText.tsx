interface Props {
    text: string
    onClick: () => void
    restClassName?: string
}
export default function LinkTypeText({ text, onClick, restClassName }: Props) {
    return (
        <span
            onClick={onClick}
            className={`font-medium text-blue-600 cursor-pointer hover:text-blue-800 ${restClassName}`}
        >
            {text}
        </span>
    )
}
