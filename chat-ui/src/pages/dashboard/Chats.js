import { Avatar, Badge, Box, Button, Divider, IconButton, InputBase, Stack, Typography, alpha, styled } from '@mui/material'
import {ArchiveBox, CircleDashed, MagnifyingGlass, Users} from "phosphor-react"
import { ChatList } from '../../data';
// import SimpleBar from 'simplebar-react';
import { SimpleBarStyle } from '../../components/Scrollbar';
import {useTheme} from '@mui/material/styles'
import ChatElement from '../../components/ChatElement';
import { useState } from 'react';
import Friends from '../../sections/main/Friends';
// import React from 'react'





const Search = styled("div")(({theme})=>({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
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
  const [openDialog, setOpenDialog] = useState(false)
  const theme = useTheme()

  const handleCloseDialog = ()=>{
    setOpenDialog(false)
  }

  const handleOpenDialog = ()=>{
    setOpenDialog(true)
  }
  return (
    <>
    <Box sx={{position: "relative", width: 320, backgroundColor: theme.palette.mode === "light"? "#F8FAFF" : theme.palette.background.paper, boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"}}>
      <Stack p={3} spacing={2} sx={{height: "100vh"}}>
<Stack direction="row" alignItems={"center"} justifyContent="space-between">
            <Typography>
                Chats
            </Typography>
            <IconButton onClick={()=>{
              handleOpenDialog()
            }}>
              <Users></Users>
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

        <Stack direction="column" sx={{flexGrow: 1, overflow: "hidden", height: "100%"}}>
          <SimpleBarStyle timeout={500} clickOnTrack={false} style={{ height: "100%" }}>
            <Stack spacing={2.4}>
              <Typography variant='subtitle2' sx={{color: "#676767"}}>
                Pinned
              </Typography>
              {ChatList.filter((el)=> el.pinned).map((el)=>{
                return <ChatElement key={el.id} {...el}></ChatElement>
              })}
            </Stack>

            <Stack spacing={2.4} sx={{ mt: 2.4 }}>
              <Typography variant='subtitle2' sx={{color: "#676767"}}>
                All Chats
              </Typography>
              {ChatList.filter((el)=> !el.pinned).map((el)=>{
                return <ChatElement key={el.id} {...el}></ChatElement>
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>

      </Stack>

        

    </Box>
    {openDialog && <Friends open={openDialog} handleClose={handleCloseDialog}></Friends>}
    </>
    

    
  )
}

export default Chats