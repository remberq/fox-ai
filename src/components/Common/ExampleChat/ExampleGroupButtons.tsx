import { IconButton } from '@/components/Common/IconButton'
import like from 'p/like.svg'
import dis from 'p/dislike.svg'
import copy from 'p/copy.svg'
import dots from 'p/more.svg'

export const ExampleGroupButtons = () => {
    return (
        <div className="flex flex-col items-center justify-start gap-2">
            <div className="mt-4 py-4 w-[30px] h-[150px] flex flex-col justify-between items-center gap-2 rounded-[22px] border border-white">
                <IconButton icon={like} />
                <div className="w-1/2 h-[1px] border border-white" />
                <IconButton icon={dis} />
                <div className="w-1/2 h-[1px] border border-white" />
                <IconButton icon={copy} />
            </div>
            <IconButton
                icon={dots}
                iconButtonClass="border border-white w-[30px] h-[30px]"
            />
        </div>
    )
}
