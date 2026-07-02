import React from 'react'
import { Box, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import ProfileForm from '../../sections/settings/ProfileForm'

const Profile = () => {
  return (
   <>
    <Stack direction="row" sx={{ width: "100%" }}>

      <Box
          sx={{
            height: "100vh",
            width: 320,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,

            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>

             <Stack direction="row" alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color={"#4B4B4B"} />
              </IconButton>

              <Typography variant="h5">Profile</Typography>
            </Stack>
            <ProfileForm></ProfileForm>
          </Stack>


        </Box>


        {/* right panel */}
        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 420px )",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#FFF"
                : theme.palette.background.paper,
            borderBottom: "6px solid #0162C4",
          }}
        ></Box>
    </Stack>
   </>
  )
}

export default Profile