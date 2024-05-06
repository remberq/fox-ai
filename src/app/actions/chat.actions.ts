'use server'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export const revalidateChats = () => revalidateTag('chats')

const BASE_URL = process.env.BACK_URL + '/chats'

export async function chatActions() {
    try {
        await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                role: 'system',
                content:
                    'Ты код генератор, отвечай всегда сообщением в формате Markdown с указанием языка программирования на котором ты пишешь код',
            }),
        })
    } catch (error) {
        redirect('error')
    }

    revalidateChats()
}

export async function deleteAllChats() {
    try {
        await fetch(BASE_URL, {
            method: 'DELETE',
        })
    } catch (error) {
        redirect('error')
    }

    revalidateChats()
}

export async function deleteChat(id: number) {
    try {
        await fetch(BASE_URL + `/${id}`, {
            method: 'DELETE',
        })
    } catch (error) {
        redirect('error')
    }

    revalidateChats()
    redirect('/chat')
}

export async function getChats() {
    try {
        return await fetch(BASE_URL, {
            next: { tags: ['chats'] },
        })
            .then((res) => res.json())
            .then((data) => data.data)
    } catch (error) {
        redirect('error')
    }
}
