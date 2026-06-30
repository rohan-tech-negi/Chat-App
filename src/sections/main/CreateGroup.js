import { Dialog, DialogTitle, Slide } from '@mui/material'
import React from 'react'

const CreateGroup = ({ open, handleClose }) => {

    const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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
        {/* title */}
        <DialogTitle>{'Create New Group'}</DialogTitle>


    </Dialog>
  )
}

export default CreateGroup