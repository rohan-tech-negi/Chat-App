import React, { useState } from 'react';
import { Box, IconButton, Stack, Divider, Avatar, Switch, useTheme , MenuItem, Menu} from "@mui/material";
import { styled } from "@mui/material/styles";
import { faker } from "@faker-js/faker";

import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Nav_Setting } from "../../data";
import useSettings from "../../hooks/useSettings.js";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
        // MUI v5 style dynamic check
        ...(theme.palette.mode === 'dark' && {
          backgroundColor: '#177ddc',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    // MUI v5 style dynamic check
    ...(theme.palette.mode === 'dark' && {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));

const SideBar = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings();
  return (
    <Box p={2} sx={{backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width:100}}>

      <Stack direction="column" sx={{height:"100%"}} alignItems={"center"} spacing={3} justifyContent="space-between" > 
        <Stack alignItems={"center"} spacing={4}>
          <Box sx={{
        backgroundColor: theme.palette.primary.main, height: 64 , width: 64, borderRadius: 1.5
      }} >
        

       
        <img src={Logo} alt="chat app logo">
        </img>

      </Box>
      <Stack sx={{width: "max-content"}} direction="column" alignItems="center" spacing={3}>
        {Nav_Buttons.map((el)=> 
          el.index === selected ? (
            <Box sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5}} key={el.index}>
              <IconButton sx={{width:"max-content", color: theme.palette.mode === "light" ? "white" : theme.palette.text.primary}}>{el.icon}</IconButton>
            </Box>
          ) : (
            <IconButton onClick={()=>{
              setSelected(el.index)
            }} sx={{width:"max-content",color: theme.palette.mode === "light" ? "black" : theme.palette.text.primary}} key={el.index}>{el.icon}</IconButton>
          )
        )}
        <Divider sx={{width: "48px"}} />
        {Nav_Setting.map((el) =>
          el.index === selected ? (
            <Box sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5}} key={el.index}>
              <IconButton sx={{width: "max-content", color: theme.palette.mode === "light" ? "black" : theme.palette.text.primary}}>{el.icon}</IconButton>
            </Box>
          ) : (
            <IconButton onClick={()=>{
              setSelected(el.index)
            }} sx={{width:"max-content", color: theme.palette.mode === "light" ? "black" : theme.palette.text.primary}} key={el.index}>{el.icon}</IconButton>
          )
        )}

        
      </Stack>


        </Stack>
      
      <Stack spacing={4}>
        <AntSwitch onChange={()=>{
          onToggleMode()
        }} defaultChecked></AntSwitch>
        <Avatar src={faker.image.avatar()}></Avatar>
      </Stack>

      

      
      
 </Stack>
     </Box>
  )
}

export default SideBar