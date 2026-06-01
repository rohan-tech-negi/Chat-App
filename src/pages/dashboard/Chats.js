import { Box, Button, Divider, IconButton, InputBase, Stack, Typography, alpha, styled } from '@mui/material'
import {ArchiveBox, CircleDashed, MagnifyingGlass} from "phosphor-react"
import React from 'react'

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

      </Stack>

        

    </Box>
  )
}

export default Chats