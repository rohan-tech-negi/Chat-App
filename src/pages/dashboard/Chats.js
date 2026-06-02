import { Avatar, Badge, Box, Button, Divider, IconButton, InputBase, Stack, Typography, alpha, styled } from '@mui/material'
import {ArchiveBox, CircleDashed, MagnifyingGlass} from "phosphor-react"
import {faker} from "@faker-js/faker"
import { ChatList } from '../../data';
// import React from 'react'

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

const ChatElement= ()=>{
  return (
    <Box sx={{
      width: "100%",
      backgroundColor: "white",
      borderRadius: 1,
      
    }} p={2}>

      <Stack direction="row" spacing={2} alignItems={"center"} justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          <StyledBadge overlap='circular' anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }} variant="dot">
        <Avatar src={faker.image.avatar()} />
      </StyledBadge>
      <Stack spacing={0.3}>
        <Typography variant='subtitle2'>
          Shashank
        </Typography>
        <Typography variant='caption'>
          How are you?
        </Typography>

      </Stack>

      <Stack spacing={2} alignItems="center">
          <Typography sx={{fontWeight: 600}} variant="caption">
            9:36
          </Typography>
          <Badge color="primary" badgeContent={2}>

          </Badge>

      </Stack>
        </Stack>
        
      </Stack>
      
      
    </Box>
  )
}

const Search = styled("div")(({theme})=>({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  width: "100%",
  marginLeft: 0
}))

const SearchIconWrapper = styled("div")(({theme})=>({
  padding: theme.spacing(0,2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  pointerEvents: "none",
  justifyContent: "center"
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: "inherit",
  "& .MuiInputBase-input":{
    padding: theme.spacing(1,1,1,0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%"
  }
}))

const Chats = () => {
  return (
    <Box sx={{position: "relative", height:"100%", width: 320, backgroundColor: "#F8FAFF", boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"}}>
      <Stack p={3} spacing={2}>
<Stack direction="row" alignItems={"center"} justifyContent="space-between">
            <Typography>
                Chats
            </Typography>
            <IconButton>
              <CircleDashed></CircleDashed>
            </IconButton>
        </Stack>
        <Stack sx={{width: "100%", position: "relative"}}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color='gray' ></MagnifyingGlass>
              
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search...' inputProps={{'aria-label': "search"}}></StyledInputBase>
          </Search>
        </Stack>

        <Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <ArchiveBox size={24}></ArchiveBox>
          <Button> Archive</Button>
          </Stack>
          <Divider></Divider>
        </Stack>

        <Stack direction="column">
          <Stack spacing={2.4}>
<Typography variant='subtitle2' sx={{color: "#676767"}}>
  Pinned
</Typography>
{ChatList.filter((el)=> el.pinned).map((el)=>{
  return <ChatElement></ChatElement>
})}
 
          </Stack>
         
        </Stack>

      </Stack>

        

    </Box>
  )
}

export default Chats