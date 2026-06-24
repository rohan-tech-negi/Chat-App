import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import React from 'react'

const Settings = () => {
  const theme = useTheme()
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Left Side */}
      <Box sx={{ overflowY: "scroll", height: "100vh", width: 320, boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)", backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background }}>
        <Stack p={4} spacing={5}>
          {/* header */}
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton>
              <CaretLeft size={24} color={'#435BD7'}></CaretLeft>
            </IconButton>
            <Typography variant='h6'>Settings</Typography>
          </Stack>

          {/* profile */}
          

          {/* list of options */}

        </Stack>
      </Box>
    </Stack>
  )
}

export default Settings