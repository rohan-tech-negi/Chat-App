import { Box, Stack } from '@mui/material'
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
        {/* chatheader */}
        <Header></Header>

        {/* msg */}
        <Box width={"100%"} sx={{ flexGrow: 1, height: "100%", overflowY: "auto" }}>
          <Message menu={true}></Message>
        </Box>

        {/* chat footer */}
        <Footer></Footer>
    </Stack>
  )
}

export default Conversation