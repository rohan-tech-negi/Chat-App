import { Dialog } from '@mui/material'
import React from 'react'

const Shortcuts = ({open, handleClose}) => {
  return (
    <>
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">

    </Dialog>
    </>
  )
}

export default Shortcuts