import Markdown from 'markdown-parser-react'

export default function AIAnswer({ aiAnswer }: { aiAnswer: string }) {
    return (
        <div className="px-[34px]">
            <Markdown content={aiAnswer} />
        </div>
    )
}
