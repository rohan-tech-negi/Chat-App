import { Box, IconButton, Stack, Typography, useTheme ,Tab, Tabs} from '@mui/material'
import React from 'react'
import { CaretLeft, X } from 'phosphor-react'
import { ToggleSidebar, UpdateSidebarType } from '../radux/slices/app'
import { useDispatch } from 'react-redux'

const SharedMessage = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Shared Message</Typography>
            

          </Stack>

        </Box>
        <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
        <Stack sx={{height: "100%", position: "relative", flexGrow: 1, overflowY: "auto"}} p={3} spacing={3}>

        </Stack>
      </Stack>
    </Box>
  )
}

export default SharedMessage