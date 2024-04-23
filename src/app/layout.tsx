import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import React from 'react'

const pop = Roboto({
    weight: ['400', '300', '700'],
    subsets: ['latin'],
    variable: '--font-pop',
})

export const metadata: Metadata = {
    title: 'AI Chat',
    description: 'Generated some!',
}

export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode
    modal: React.ReactNode
}>) {
    return (
        <html lang="en" className="min-h-[100vh]">
            <body className={pop.className}>
                <div>
                    {children}
                    {modal}
                </div>
            </body>
        </html>
    )
}
