import React from 'react'
import {Box, Stack, useTheme} from "@mui/material"
const Contact = () => {
  const theme = useTheme()
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

        </Box>
        
      </Stack>

    </Box>
  )
}

export default Contact