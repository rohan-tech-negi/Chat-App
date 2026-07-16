import { Dialog, Stack } from '@mui/material';
import React from 'react'

const Friends = ({ open, handleClose }) => {

     const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
    //   TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >

        <Stack p={2} sx={{ width: "100%" }}>
            


        </Stack>
    </Dialog>
  )
}

export default Friends