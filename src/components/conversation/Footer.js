import React from 'react'
import { Box, Stack, IconButton, Icon, InputAdornment, TextField, styled, useTheme } from '@mui/material'
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react'

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const StyledInput = styled(TextField)(({ theme }) => ({
  "&.MuiInputBase-input" : {
    paddingTop: "12px",
    paddingBottom: "12px"     
  }
}));

const ChatInput = ({setOpenPicker})=>{
  return (
    <StyledInput fullWidth placeholder='Write a message...' variant='filled' InputProps={{
  disableUnderline : true,
  startAdornment: <InputAdornment position="start">
  <Icon>
    <LinkSimple></LinkSimple>
  </Icon>
  </InputAdornment>,
  endAdornment: <InputAdornment position="end">
  <IconButton>
  <Icon onClick={()=>{setOpenPicker(prev=>!prev)}}>
    <Smiley></Smiley>
  </Icon>
  </IconButton>
  </InputAdornment>
}}></StyledInput>
  )
}

const Footer = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = React.useState(false)
  return (
    <Box p={2} sx={{width: "100%", backgroundColor: theme.palette.mode === 'light' ? "#F5F5F5" : theme.palette.background.paper}}>
              <Stack direction="row" alignItems={"center"} spacing={3}>
                <Stack sx={{width: "100%"}}>
                  <Box sx={{ display: openPicker ? "inline" : "none",  zIndex: 10, position: "fixed", bottom: 81, right: 100}}>
                    <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />
                  </Box>
                  
                  <ChatInput setOpenPicker={setOpenPicker}></ChatInput>
                </Stack>
                      

<Box sx={{height: 48 , width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5}}>
<Stack sx={{width: "100%", height: "100%"}} alignItems="center" justifyContent="center">
  <IconButton sx={{width: "100%", height: "100%"}}>
    <PaperPlaneTilt color="#fff"></PaperPlaneTilt>
  </IconButton>
</Stack>

</Box>
              </Stack>
        </Box>
  )
}

export default Footer