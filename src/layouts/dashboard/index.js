import { Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar.js";



const isAuthenticated = true;

const DashboardLayout = () => {
  // const { isAuthenticated } = useAuth();
  if(!isAuthenticated){
    return <Navigate to={"/auth/login"} replace />;
  }

  

  return (
    <Stack direction="row">
     {/* sidebar */}
     <SideBar></SideBar>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
