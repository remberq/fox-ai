'use client'
import { useParams } from 'next/navigation'

export const useGetConversationId = () => {
    return useParams()?.id
}
