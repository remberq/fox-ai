'use client'
import { Modal, ModalClose } from '@mui/joy'
import { LoginContent } from '@/components/Login/LoginContent'
import { useRouter } from 'next/navigation'

export default function ModalLogin() {
    const router = useRouter()

    return (
        <>
            <Modal open onClose={router.back}>
                <div className="w-fit lg:w-1/2 h-screen m-auto flex justify-center items-center">
                    <ModalClose />
                    <div className="mxs:min-w-[300px] min-w-[400px] mxs:w-screen h-fit mxs:h-screen text-center mx-auto flex flex-col gap-4 px-6 py-10 bg-white mxs:rounded-none rounded-[30px]">
                        <LoginContent />
                    </div>
                </div>
            </Modal>
        </>
    )
}
