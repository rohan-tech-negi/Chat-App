import { Avatar, Box, Divider, IconButton, Stack, Switch, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Nav_Buttons, Nav_Setting } from "../../data";
import Logo from "../../assets/Images/logo.ico"
import { useState } from "react";
import { faker } from "@faker-js/faker";

const DashboardLayout = () => {

  const theme = useTheme()

  const [selected, setSelected] = useState(0)

  console.log(theme)

  return (
    <>
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
              <IconButton sx={{width:"max-content", color:"white"}}>{el.icon}</IconButton>
            </Box>
          ) : (
            <IconButton onClick={()=>{
              setSelected(el.index)
            }} sx={{width:"max-content", color:"black"}} key={el.index}>{el.icon}</IconButton>
          )
        )}
        <Divider sx={{width: "48px"}} />
        {Nav_Setting.map((el) =>
          el.index === selected ? (
            <Box sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5}} key={el.index}>
              <IconButton sx={{width: "max-content", color: "white"}}>{el.icon}</IconButton>
            </Box>
          ) : (
            <IconButton onClick={()=>{
              setSelected(el.index)
            }} sx={{width:"max-content", color:"black"}} key={el.index}>{el.icon}</IconButton>
          )
        )}

        
      </Stack>


        </Stack>
      
      <Stack>
        <Switch defaultChecked></Switch>
        <Avatar src={faker.image.avatar()}></Avatar>
      </Stack>

      

      
      
 </Stack>
     </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;

