import { Box, Stack, useTheme } from '@mui/material'
import React from 'react'

const Settings = () => {
  const theme = useTheme()
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Left Side */}
      <Box sx={{ overflowY: "scroll", height: "100vh", width: 320, boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)", backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background }}>
        <Stack p={4} spacing={5}>
          {/* header */}
            
          {/* profile */}

          {/* list of options */}

        </Stack>
      </Box>
    </Stack>
  )
}

export default Settings