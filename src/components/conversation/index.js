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

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Conversation = () => {
  const theme = useTheme()
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
        {/* chatheader */}
        <Box p={2} sx={{ width: "100%", backgroundColor: "#F8FAFF", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"}}>
            <Stack alignItems={"center"} direction="row" justifyContent={"space-between"} sx={{width: "100%", height: "100%"}}>
                <Stack direction={"row"} spacing={2}>
                    <Box>
                        <StyledBadge overlap="circular" anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }} variant="dot" >
                            <Avatar src={faker.image.avatar()}>
                            </Avatar>
                        </StyledBadge>
                        
                    </Box>
                    <Stack spacing={0.2}>
                          <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                          <Typography variant="caption">online</Typography>
                        </Stack>
                </Stack>

                <Stack direction="row" alignItems={"center"} spacing={3}>
                  <IconButton>
                    <VideoCamera></VideoCamera>
                  </IconButton>
                  <IconButton>
                    <Phone></Phone>
                  </IconButton>
                  <IconButton>
                    <MagnifyingGlass></MagnifyingGlass>
                  </IconButton>
                  <Divider orientation='vertical' flexItem></Divider>
                  <IconButton>
                    <CaretDown></CaretDown>
                  </IconButton>
                </Stack>
            </Stack>

        </Box>

        {/* msg */}
        <Box width={"100%"} sx={{flexGrow: 1}}>

        </Box>

        {/* chat footer */}
        <Box p={2} sx={{width: "100%", backgroundColor: "#F8FAFF"}}>
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
<Stack>
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