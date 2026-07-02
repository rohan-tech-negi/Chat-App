import { Avatar, Box, Stack, styled, useTheme } from '@mui/material';
import React from 'react'
import { faker } from '@faker-js/faker';

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

const CallLogElement = ({ img, name, incoming, missed, online, id }) => {
    const theme = useTheme();
  return (
    <> <StyledChatBox
      sx={{
        width: "100%",

        borderRadius: 1,

        backgroundColor: theme.palette.background.paper,
      }}
      p={2}
    >
         <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >

        <Avatar src={faker.image.avatar()}>

        </Avatar>
      </Stack>

    </StyledChatBox>

    </>
  )
}

export {CallElement, CallLogElement}