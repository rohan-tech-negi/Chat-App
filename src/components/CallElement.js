import { Box, styled, useTheme } from '@mui/material';
import React from 'react'

const StyledChatBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

const CallElement = () => {
  return (
    <div>CallElement</div>
  )
}

const CallLogElement = () => {
    const theme = useTheme();
  return (
    <> <StyledChatBox
      sx={{
        width: "100%",

        borderRadius: 1,

        backgroundColor: theme.palette.background.paper,
      }}
      p={2}
    ></StyledChatBox>

    </>
  )
}

export {CallElement, CallLogElement}