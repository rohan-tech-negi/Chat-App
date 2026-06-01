import { Box, IconButton, Stack, Typography, alpha, styled } from '@mui/material'
import {CircleDashed} from "phosphor-react"
import React from 'react'

const Search = styled("div")(({theme})=>({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1)
}))

const Chats = () => {
  return (
    <Box sx={{position: "relative", height:"100%", width: 320, backgroundColor: "#F8FAFF", boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"}}>
      <Stack p={3}>
<Stack direction="row" alignItems={"center"} justifyContent="space-between">
            <Typography>
                Chats
            </Typography>
            <IconButton>
              <CircleDashed></CircleDashed>
            </IconButton>
        </Stack>

      </Stack>

        

    </Box>
  )
}

export default Chats