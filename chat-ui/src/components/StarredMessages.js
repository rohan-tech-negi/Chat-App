import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { CaretLeft } from 'phosphor-react'
import { UpdateSidebarType } from '../radux/slices/app'
import { useDispatch } from 'react-redux'
import Message from './conversation/Message'

const StarredMessages = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
   
  return (
    <Box sx={{width: 320, height: "100vh"}}>
      <Stack sx={{height: "100%",  }}>
                <Box sx={{
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          width: "100%",
          backgroundColor: theme.palette.mode === "light" ? "#F5F5F5" : theme.palette.background.paper
        }}>
          <Stack sx={{height: "100%", p:2}} direction="row" alignItems={"center"} j spacing={3}>
            <IconButton onClick={()=> {
              dispatch(UpdateSidebarType("CONTACT"))
            }}>
              <CaretLeft></CaretLeft>
            </IconButton>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Starred Messages</Typography>
            

          </Stack>

        </Box>
        {/* <Tabs sx={{px:2, pt:1}} value={value} onChange={handleChange} centered>
        <Tab label="Media" />
        <Tab label="Links" />
        <Tab label="Docs" />
      </Tabs> */}
        <Stack sx={{height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll"}} p={3} spacing={2}>
            <Message></Message>
            
        </Stack>
      </Stack>
    </Box>
  )
}

export default StarredMessages