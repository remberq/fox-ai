import { Button } from '@/components/Common/Button'
import { IconButton } from '@/components/Common/IconButton'
import { Avatar } from '@/components/Common/Avatar'
import gh from 'p/gh.svg'
import search from 'p/search-normal.svg'
import gg from 'p/google.svg'
import arrow from 'p/arrow.svg'
import send from 'p/send-2.svg'
import settings from 'p/setting.svg'
import avatar from 'p/av.jpeg'
import { InputWithLabel } from '@/components/Common/InputWithLabel'
import { DividerWithText } from '@/components/Common/DividerWithText'
import { ExampleChatInput } from '@/components/Common/ExampleChatInput'

export const Main = () => {
    return (
        <div className="p-6 text-center">
            <div className="w-1/3 m-auto flex flex-col gap-6">
                <Button
                    btnText="Get started free"
                    className="bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-800 transition-colors duration-500 justify-center"
                />

                <IconButton
                    iconButtonClass="bg-indigo-600 hover:bg-indigo-800 w-[46px] h-[46px] "
                    icon={arrow}
                    iconClass="group-hover:translate-x-1 transition-transform duration-500"
                />

                <IconButton
                    iconButtonClass="bg-zinc-800 w-[46px] h-[46px] "
                    icon={search}
                />
                <IconButton
                    iconButtonClass="bg-indigo-600 hover:bg-indigo-800 w-[46px] h-[46px] "
                    icon={send}
                    iconClass="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500"
                />
                <IconButton
                    iconButtonClass="bg-neutral-200 w-[34px] h-[34px]"
                    icon={settings}
                />
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
                <InputWithLabel
                    label="Email Address*"
                    name="email"
                    placeholder="ex.email@expample.com"
                    type="email"
                />
                <InputWithLabel
                    label="Password*"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                    showIcon
                />
                <DividerWithText text="Or better yet..." textPosition={50} />
                <Button
                    btnText="Continue with GitHub"
                    className="justify-center"
                    icon={gh}
                />
                <Button
                    btnText="Continue with Google"
                    className="justify-center"
                    icon={gg}
                />
                <ExampleChatInput />
            </div>
        </div>
    )
}
