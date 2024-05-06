'use server'
import { revalidateChats } from '@/app/actions/chat.actions'
import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
import { IMessages } from '@/types/ChatTypes'
import { IGigaChatRequest, ROLE_TYPES } from '@/types/GigaChatTypes'

const BASE_URL = process.env.BACK_URL + '/conversations'

export const getChatMessages = async (chatId: string) => {
    try {
        const response: IMessages[] = await fetch(BASE_URL + `/${chatId}`, {
            next: { tags: ['messages'] },
        })
            .then((res) => res.json())
            .then((data) => data.data)

        const authorQuestion = response.filter(
            (message) => message.role === ROLE_TYPES.USER
        )
        const aiAnswer = response.filter(
            (message) => message.role === ROLE_TYPES.ASSISTANT
        )

        return { authorQuestion, aiAnswer }
    } catch (error) {
        console.log(error)
        redirect('error')
    }
}

export const createMessageAndChat = async (request: IGigaChatRequest) => {
    try {
        const chat = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                ...request,
            }),
        })
            .then((res) => res.json())
            .then((data) => data.data)

        revalidateChats()
        return chat
    } catch (error) {
        console.log(error)
        redirect('error')
    }
}

export const addNewMessageToChat = async (
    request: IGigaChatRequest,
    chatId: string
) => {
    try {
        await fetch(BASE_URL + `/${chatId}`, {
            method: 'POST',
            body: JSON.stringify({
                ...request,
            }),
        })
    } catch (error) {
        console.log(error)
        redirect('error')
    }

    revalidateTag('messages')
}
