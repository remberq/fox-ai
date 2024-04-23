import { Modal, ModalClose, ModalDialog, Typography } from '@mui/joy'

export default function ErrorModal() {
    return (
        <Modal open>
            <ModalDialog>
                <ModalClose />
                <Typography level="h1" variant="solid">
                    Error AUTH
                </Typography>
            </ModalDialog>
        </Modal>
    )
}
