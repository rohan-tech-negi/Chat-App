import { Avatar, Box, Stack } from '@mui/material'
import React from 'react'
import { faker } from '@faker-js/faker'

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
        {/* chatheader */}
        <Box sx={{height:100, width: "100%", backgroundColor: "#F8FAFF", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"}}>
            <Stack alignItems={"center"} direction="row" justifyContent={"space-between"} sx={{width: "100%", height: "100%"}}>
                <Stack direction={"row"} spacing={2}>
                    <Box>
                        <StyleBadge>
                            <Avatar src={faker.image.avatar()}>
                            </Avatar>
                        </StyleBadge>
                    </Box>
                </Stack>

            </Stack>

        </Box>

        {/* msg */}
        <Box width={"100%"} sx={{flexGrow: 1}}>

        </Box>

        {/* chat footer */}
        <Box sx={{height: 100, width: "100%", backgroundColor: "#000"}}>

        </Box>
    </Stack>
  )
}

export default Conversation