import { SnackbarOrigin } from '@mui/joy/Snackbar/SnackbarProps'
import { SnackbarProps } from '@mui/joy/Snackbar'

export interface IChat {
    id: number
    text: string
}

export interface IMessages {
    id: number
    role: string
    content: string
    chatId: number | null
}

export interface ISnackBar {
    open: boolean
    vertical: SnackbarOrigin['vertical']
    horizontal: SnackbarOrigin['horizontal']
    text: string
    color: SnackbarProps['color']
}
