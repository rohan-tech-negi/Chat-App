import { Dialog, DialogContent, DialogTitle, Grid, Slide } from '@mui/material'
import React from 'react'

const Shortcuts = ({open, handleClose}) => {
    const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  return (
    <>
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" keepMounted TransitionComponent={Transition} sx={{p:4}}>
        <DialogTitle>
            Keyboard Shortcuts
        </DialogTitle>
        <DialogContent sx={{mt:4}}>
            <Grid container >

            </Grid>
        </DialogContent>

    </Dialog>
    </>
  )
}

export default Shortcuts