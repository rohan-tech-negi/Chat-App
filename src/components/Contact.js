import React from 'react'
import {Avatar, Box, IconButton, Stack, Typography, useTheme} from "@mui/material"
import { X } from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { ToggleSidebar } from '../radux/slices/app'
import { faker } from '@faker-js/faker'
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

        {/* body */}
        <Stack sx={{height: "100%", position: "relative", flexGrow: 1, overflow: "scroll"}} p={3} spacing={3}>
            <Stack alignItems={"center"} direction="row" spacing={2}>
              <Avatar src={faker.image.avatar()}></Avatar>
              <Stack spacing={0.5}>
                <Typography variant='article'>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant='article'>
                  {faker.phone.number()}
                </Typography>

              </Stack>
            </Stack>
        </Stack>
        
      </Stack>

    </Box>
  )
}

export default Contact