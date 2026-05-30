import { Box, Divider, IconButton, Stack, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Nav_Buttons } from "../../data";
import Logo from "../../assets/Images/logo.ico"
import { Gear } from "phosphor-react";
import { useState } from "react";

const DashboardLayout = () => {

  const theme = useTheme()

  const [selected, setSelected] = useState(0)

  console.log(theme)

  return (
    <>
     <Box p={2} sx={({backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width:100})}>

      <Stack direction="column" sx={{width:"100%"}} alignItems={"center"} spacing={3}> 
      <Box sx={{
        backgroundColor: theme.palette.primary.main, height: 64 , width: 64, borderRadius: 1.5
      }} >
        

       
        <img src={Logo} alt="chat app logo">
        </img>

      </Box>
      <Stack sx={{width: "max-content"}} direction="column" alignItems="center" spacing={3}>
        {Nav_Buttons.map((el)=> 
        
        (
          el.index === selected ?
          <Box sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5}}>
            <IconButton sx={{width:"max-content", color:"white"}} key={el.index}>{el.icon}</IconButton>
          </Box> :  <IconButton onClick={()=>{
            setSelected(el.index)
          }} sx={{width:"max-content", color:"black"}} key={el.index}>{el.icon}</IconButton>
        ))}
        <Divider sx={{width: "48px"}}>

        </Divider>
        {selected === 3 ? 
         <Box sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5}}> 
          <IconButton>
          <Gear></Gear>
        </IconButton>
         </Box> : <IconButton>
          <Gear></Gear>
        </IconButton>
      }

        
      </Stack>

      
      
 </Stack>
     </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
