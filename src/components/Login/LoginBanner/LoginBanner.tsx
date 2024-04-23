import { BannerExample } from '@/components/Common/ExampleChat/BannerExample'
import { LoginBannerTitle } from '@/components/Login/LoginBanner/LoginBannerTitle'

export const LoginBanner = () => {
    return (
        <div className="w-1/2 rounded-[30px] bg-gradient-to-r from-violet-600 to-indigo-600 backdrop-blur">
            <div className="z-0 w-full h-full rounded-3xl flex flex-col p-8 justify-around">
                <LoginBannerTitle />
                <br />
                <BannerExample />
            </div>
        </div>
    )
}
