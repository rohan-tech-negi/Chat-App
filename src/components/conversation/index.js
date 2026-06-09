import { Avatar, Box, Stack, Badge, styled, Typography, IconButton, Divider, TextField, InputAdornment, Icon, useTheme } from '@mui/material'
import React from 'react'
import { faker } from '@faker-js/faker'
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from 'phosphor-react';

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
        

        {/* msg */}
        <Box width={"100%"} sx={{flexGrow: 1}}>

        </Box>

        {/* chat footer */}
        <Box p={2} sx={{width: "100%", backgroundColor: theme.palette.mode === 'light' ? "#F5F5F5" : theme.palette.background.paper}}>
              <Stack direction="row" alignItems={"center"} spacing={3}>
                      
<StyledInput fullWidth placeholder='Write a message...' variant='filled' InputProps={{
  disableUnderline : true,
  startAdornment: <InputAdornment>
  <Icon>
    <LinkSimple></LinkSimple>
  </Icon>
  </InputAdornment>,
  endAdornment: <InputAdornment>
  <IconButton>
  <Icon>
    <Smiley></Smiley>
  </Icon>
  </IconButton>
  </InputAdornment>
}}></StyledInput>
<Box sx={{height: 48 , width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5}}>
<Stack sx={{width: "100%", height: "100%"}} alignItems="center" justifyContent="center">
  <IconButton sx={{width: "100%", height: "100%"}}>
    <PaperPlaneTilt color="#fff"></PaperPlaneTilt>
  </IconButton>
</Stack>

</Box>
              </Stack>
        </Box>
    </Stack>
  )
}

export default Conversation