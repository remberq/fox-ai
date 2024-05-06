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
