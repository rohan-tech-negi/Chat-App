import { Box, IconButton, Stack, Typography, useTheme ,Tab, Tabs, Grid} from '@mui/material'
import React from 'react'
import { CaretLeft } from 'phosphor-react'
import { UpdateSidebarType } from '../radux/slices/app'
import { useDispatch } from 'react-redux'
import {faker} from '@faker-js/faker'
import { SHARED_DOCUMENTS, SHARED_LINKS } from '../data'
import { DocMsg, LinkMsg } from './conversation/MsgTypes'

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
        <Tabs sx={{px:2, pt:1}} value={value} onChange={handleChange} centered>
        <Tab label="Media" />
        <Tab label="Links" />
        <Tab label="Docs" />
      </Tabs>
        <Stack sx={{height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll"}} p={3} spacing={value === 1 ? 1: 3}>
            {(()=>{
              switch (value) {
                case 0:
                    return(
                      <Grid container spacing={2}>
                    {
                        [0,1,2,3,4,5,6].map((el)=>{
                            return (
                                <Grid item xs={4} key={el}>
                                    <Box>
                                        <img src={faker.image.avatar()} alt="" />
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>  
                    )
                case 1:
                    return SHARED_LINKS.map((el)=> <LinkMsg el={el} menu={true}></LinkMsg>)
                case 2:
                    return SHARED_DOCUMENTS.map((el)=> <DocMsg el={el} menu={true}></DocMsg>)
              
                default:
                    break;
              }
            })()}
        </Stack>
      </Stack>
    </Box>
  )
}

export default SharedMessage