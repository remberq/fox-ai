'use client'

import { useElementFollowMouse } from '@/components/Hooks/MouseHook'
import { JSX } from 'react'

interface Props {
    contentElementId: string
}

/**
 * Renders a mouse-follow element based on the contentElementId.
 *
 * @param {string} contentElementId - The ID of the content element.
 * @return {JSX.Element} The JSX element representing the mouse-follow element.
 */
export default function MouseFollowElement({
    contentElementId,
}: Props): JSX.Element {
    useElementFollowMouse('mouse-follow', contentElementId)

    return (
        <div className="absolute py-6 right-0 top-0 w-3 h-full">
            <div
                id="mouse-follow"
                className="sticky top-0 w-3 h-12 bg-indigo-500 rounded-tl-xl rounded-bl-xl"
            ></div>
        </div>
    )
}
