'use client'
import { useCallback, useEffect, useState } from 'react'

export const useIsMouseInElement = (id: string) => {
    const [isMouseInElement, setIsMouseInElement] = useState(false)

    const handleMouseIn = useCallback(() => {
        setIsMouseInElement(true)
    }, [])

    const handleMouseOut = useCallback(() => {
        setIsMouseInElement(false)
    }, [])

    useEffect(() => {
        const element = document.getElementById(id)

        if (element) {
            element.addEventListener('mouseenter', handleMouseIn)
            element.addEventListener('mouseleave', handleMouseOut)
        }

        return () => {
            if (element) {
                element.removeEventListener('mouseenter', handleMouseIn)
                element.removeEventListener('mouseleave', handleMouseOut)
            }
        }
    }, [handleMouseIn, handleMouseOut, id])

    return isMouseInElement
}

function isTouchDevice() {
    try {
        // Проверяем работаем мы с сенсорными экранами или мышкой,
        // при создании будет исключение если это десктопная версия
        document.createEvent('TouchEvent')
        return true
    } catch (e) {
        return false
    }
}

/**
 * Хук, который включает следование элемента за курсором
 *
 * @param elementId id элемента который следует за курсором
 * @param contentElementId id элемента в рамках которого будет движение
 */
export const useElementFollowMouse = (
    elementId: string,
    contentElementId: string
) => {
    const isInsideElement = useIsMouseInElement(contentElementId)

    useEffect(() => {
        let element = document.getElementById(elementId)

        const move = (e: any) => {
            let y
            try {
                y = !isTouchDevice() ? e.pageY : e.touches[0].pageY
            } catch (e) {
                throw Error('Mouse move element error!')
            }
            if (element) {
                // 24px компенсация для того что бы курсор был выровнен с элементом посередине
                element.style.top = y - 24 + 'px'
            }
        }

        if (isInsideElement) {
            document.addEventListener('mousemove', move)
            document.addEventListener('touchmove', move)
        } else {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('touchmove', move)
        }

        return () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('touchmove', move)
        }
    })
}
