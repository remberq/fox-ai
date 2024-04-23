import Divider from '@mui/joy/Divider'

interface DividerProps {
    text?: string
    textPosition?: number
}
export const DividerWithText = ({ text, textPosition }: DividerProps) => {
    return (
        <Divider
            className="px-6 font-thin"
            sx={{ '--Divider-childPosition': `${textPosition}%` }}
        >
            {text}
        </Divider>
    )
}
