import { useState } from 'react'

export const useModal = () => {
    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)
    const openModal = () => setOpen(true)
    return {
        open,
        setOpen,
        closeModal,
        openModal,
    }
}
