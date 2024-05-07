import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import doc from 'p/ds.svg'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { copyToClipboard } from '@/utils/textUtils'
import Snackbar from '@mui/joy/Snackbar'
import { ISnackBar } from '@/types/ChatTypes'
import { LANGUAGE_ARRAY } from '@/utils/data'

function extractCodeBlocks(input: string): string[] {
    const regex = /```/g

    return input.split(regex)
}

const initSnackBar: ISnackBar = {
    open: false,
    vertical: 'top',
    horizontal: 'center',
    text: 'Code copied to clipboard',
    color: 'success',
}

export default function AIAnswer({ aiAnswer }: { aiAnswer: string }) {
    const [snackBarState, setSnackBarState] = useState(initSnackBar)
    const codeBlocks = extractCodeBlocks(aiAnswer)

    const handleClick = async (codeWithoutLng: string) => {
        const result = await copyToClipboard(codeWithoutLng)
        setSnackBarState((prev) => ({
            ...prev,
            ...result,
        }))
    }

    const renderAiAnswer = () =>
        codeBlocks.map((code, index) => {
            const lang = code.split('\n')[0]
            if (LANGUAGE_ARRAY.includes(lang)) {
                const codeWithoutLng = code.replace(lang, '')
                return (
                    <Fragment key={`${lang}${index}`}>
                        <div
                            onClick={() => handleClick(codeWithoutLng)}
                            className="flex flex-row justify-between px-3 py-1 text-[#ffc66d] w-full bg-zinc-800 h-8 rounded-t-2xl"
                        >
                            {lang}
                            <div className="flex-row flex items-center px-3 gap-3 bg-zinc-700 rounded-xl transition-colors duration-500 cursor-pointer hover:bg-zinc-500">
                                <Image
                                    className="w-4"
                                    src={doc}
                                    alt="document"
                                />
                                <p>copy</p>
                            </div>
                        </div>
                        <SyntaxHighlighter
                            showLineNumbers
                            customStyle={{
                                borderRadius: '0 0 16px 16px',
                                marginTop: '0',
                            }}
                            language={lang}
                            style={darcula}
                        >
                            {codeWithoutLng}
                        </SyntaxHighlighter>
                    </Fragment>
                )
            }

            return <Markdown key={`${lang}${index}`}>{code}</Markdown>
        })

    return (
        <div className="px-[34px]">
            {renderAiAnswer()}
            <Snackbar
                autoHideDuration={2000}
                anchorOrigin={{
                    vertical: snackBarState.vertical,
                    horizontal: snackBarState.horizontal,
                }}
                open={snackBarState.open}
                size="sm"
                variant="outlined"
                color={snackBarState.color}
                onClose={() => {
                    setSnackBarState(initSnackBar)
                }}
                sx={{
                    minWidth: 360,
                    justifyContent: 'center',
                }}
            >
                {snackBarState.text}
            </Snackbar>
        </div>
    )
}
