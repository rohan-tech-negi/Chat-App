import React from 'react'

const StartCall = () => {
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
    ></Dialog>
    
  )
}

export default StartCall