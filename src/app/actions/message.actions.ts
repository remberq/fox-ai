'use server'
import { IGigaChatRequest } from '@/app/api/giga-chat/types'
import { revalidateChats } from '@/app/actions/chat.actions'
import { redirect } from 'next/navigation'
import { Messages } from '@prisma/client'
import { revalidateTag } from 'next/cache'

const BASE_URL = process.env.BACK_URL + '/conversations'

export const getChatMessages = async (chatId: string) => {
    try {
        const response: Messages[] = await fetch(BASE_URL + `/${chatId}`, {
            next: { tags: ['messages'] },
        })
            .then((res) => res.json())
            .then((data) => data.data)

        const authorQuestion = response.filter(
            (message) => message.role === 'user'
        )
        const aiAnswer = response.filter(
            (message) => message.role === 'assistant'
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
