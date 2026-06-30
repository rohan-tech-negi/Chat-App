import { Dialog } from '@mui/material'
import React from 'react'

const CreateGroup = () => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >

        
    </Dialog>
  )
}

export default CreateGroup