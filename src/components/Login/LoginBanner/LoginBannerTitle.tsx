import { Orbitron } from 'next/font/google'
import Image from 'next/image'
import fox from 'p/fox-svgrepo-com.svg'

const mono = Orbitron({
    weight: ['400', '800'],
    subsets: ['latin'],
    variable: '--font-mon',
})

export const LoginBannerTitle = () => {
    return (
        <div>
            <div
                className={`${mono.className} flex flex-col justify-between items-center gap-12`}
            >
                <div className="flex flex-col justify-between items-center">
                    <h1 className="text-[46px] font-bold text-white">
                        FOX A.I CHAT+
                    </h1>
                    <div className="font-thin text-xs text-white">
                        <p>Learn, Discover & Automate in One Place.</p>
                    </div>
                </div>
                <Image className="w-[100px]" src={fox} alt="logo" />
            </div>
        </div>
    )
}
