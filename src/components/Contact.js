import React from 'react'
import {Box, IconButton, Stack, Typography, useTheme} from "@mui/material"
import { X } from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { ToggleSidebar } from '../radux/slices/app'
const Contact = () => {
  const theme = useTheme()

  const dispatch = useDispatch()
  return (
    <Box sx={{
        height: "100%",
        width: 320,
        backgroundColor: "white"
    }}>

      <Stack sx={{height: "100%"}}>
        <Box sx={{
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          width: "100%",
          backgroundColor: theme.palette.mode === "light" ? "#F5F5F5" : theme.palette.background.paper
        }}>
          <Stack sx={{height: "100%", p:2}} direction="row" alignItems={"center"} justifyContent="space-between" spacing={3}>
            <Typography>Contact Info</Typography>
            <IconButton onClick={()=> {
dispatch(ToggleSidebar())
            }}>
              <X></X>
            </IconButton>

          </Stack>

        </Box>
        
      </Stack>

    </Box>
  )
}

export default Contact