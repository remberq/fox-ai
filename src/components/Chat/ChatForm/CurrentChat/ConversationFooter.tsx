import { IconButton } from '@/components/Common/IconButton'
import like from 'p/likeB.svg'
import dis from 'p/dislike.svg'
import copy from 'p/copy.svg'
import dots from 'p/more.svg'
import refresh from 'p/refresh-circle.svg'

export default function ConversationFooter() {
    return (
        <div className="flex flex-row justify-between mt-8 px-[34px]">
            <div className="flex flex-row items-center justify-start gap-2">
                <div className="px-4 w-[150px] h-[30px] flex flex-row justify-between items-center gap-2 rounded-[22px] bg-rose-50">
                    <IconButton icon={like} />
                    <div className="w-[1px] h-1/2 border border-zinc-400" />
                    <IconButton
                        icon={dis}
                        iconClass="fill-zinc-50 stroke-zinc-50"
                    />
                    <div className="w-[1px] h-1/2 border border-zinc-400" />
                    <IconButton
                        icon={copy}
                        iconClass="fill-zinc-50 stroke-zinc-50"
                    />
                </div>
                <IconButton
                    iconClass="fill-zinc-50 stroke-zinc-50"
                    icon={dots}
                    iconButtonClass="bg-rose-50 w-[30px] h-[30px]"
                />
            </div>
            <div className="flex flex-row items-center justify-center gap-2 h-[30px] bg-rose-50 rounded-[22px] px-3 cursor-pointer">
                <IconButton icon={refresh} />
                <span className="font-light text-sm">Regenerate</span>
            </div>
        </div>
    )
}
