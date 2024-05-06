import { DialogTitle, Modal, ModalClose, ModalDialog } from '@mui/joy'
import { FC } from 'react'
import { deleteChat } from '@/app/actions/chat.actions'
import { useGetConversationId } from '@/components/Hooks/hooks'

interface ModalProps {
    open: boolean
    // eslint-disable-next-line no-unused-vars
    setOpen: (open: boolean) => void
}

export const CustomModal: FC<ModalProps> = ({ setOpen, open }) => {
    const id = useGetConversationId()

    const handleDeleteClick = async (id: number) => {
        await deleteChat(id)
        setOpen(false)
    }
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ModalDialog
                sx={{
                    width: '400px',
                    height: '200px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <ModalClose />
                <DialogTitle>
                    Are you sure you want to delete this chat?
                </DialogTitle>
                <div className="flex flex-row justify-between w-full px-5">
                    <button className="" onClick={() => setOpen(false)}>
                        Cancel
                    </button>
                    <button onClick={() => handleDeleteClick(Number(id))}>
                        Yes
                    </button>
                </div>
            </ModalDialog>
        </Modal>
    )
}
