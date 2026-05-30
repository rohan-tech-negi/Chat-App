import { Box, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {

  const theme = useTheme()

  console.log(theme)

  return (
    <>
     <Box sx={({backgroundColor: theme.palette.background.paper, height: "100vh", width:100})}>

     </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
