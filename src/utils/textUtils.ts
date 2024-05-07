import { ISnackBar } from '@/types/ChatTypes'

export const copyToClipboard = async (
    textToCopy: string
): Promise<Partial<ISnackBar>> => {
    try {
        await navigator.clipboard.writeText(textToCopy)
        return {
            text: 'Code copied to clipboard',
            color: 'success',
            open: true,
        }
    } catch (err) {
        return {
            text: 'Failed to copy',
            color: 'danger',
            open: true,
        }
    }
}
