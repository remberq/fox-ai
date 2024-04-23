import { IconButton } from '@/components/Common/IconButton'
import settings from 'p/setting.svg'
import { Button } from '@/components/Common/Button'
import { Avatar } from '@/components/Common/Avatar'
import avatar from 'p/av.jpeg'

export default function OverlayConversationFooter() {
    return (
        <div className="px-4 h-fit flex flex-col gap-4">
            <Button
                btnText="Settings"
                Content={
                    <IconButton
                        size={34}
                        iconButtonClass="bg-neutral-200 w-[34px] h-[34px]"
                        icon={settings}
                    />
                }
            />
            <Button
                btnText="Andrey Salynin"
                Content={<Avatar image={avatar} />}
            />
        </div>
    )
}
