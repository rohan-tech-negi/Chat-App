import { Avatar, Box, Stack, Badge, styled, Typography, IconButton, Divider, TextField, InputAdornment, Icon, useTheme } from '@mui/material'
import React from 'react'
import { faker } from '@faker-js/faker'
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from 'phosphor-react';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const StyledInput = styled(TextField)(({ theme }) => ({
  
      "&.MuiInputBase-input" : {
        paddingTop: "12px",
        paddingBottom: "12px"     
      }
  
}));



const Conversation = () => {
  const theme = useTheme()
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
        {/* chatheader */}
        <Header></Header>

        {/* msg */}
        <Box width={"100%"} sx={{flexGrow: 1}}>
          <Message></Message>
        </Box>

        {/* chat footer */}
        <Footer></Footer>
    </Stack>
  )
}

export default Conversation