import React from 'react'
import { Box, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material'

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


        </Box>
    </Stack>
   </>
  )
}

export default Profile