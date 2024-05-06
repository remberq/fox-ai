import React from 'react'
import ChatOverlay from '@/components/Chat/ChatOverlay/ChatOverlay'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="bg-rose-100">
            <div className="flex flex-row">
                <ChatOverlay />
                {children}
            </div>
        </div>
    )
}
