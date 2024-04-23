'use client'
import { useEffect, useState } from 'react'

export const useGetShadow = (elementID: string) => {
    const [showTopShadow, setShowTopShadow] = useState(false)

    useEffect(() => {
        const element = document.getElementById(elementID)
        if (element) {
            const handleScroll = (event: Event) => {
                const target = event.currentTarget as HTMLElement
                setShowTopShadow(target.scrollTop > 0)
            }

            element.addEventListener('scroll', handleScroll)

            return () => {
                element.removeEventListener('scroll', handleScroll)
            }
        }

        return () => null
    }, [elementID])

    return showTopShadow
}
