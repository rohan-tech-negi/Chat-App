import { Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar.js";
import {useSelector} from "react-redux"



const isAuthenticated = true;

const DashboardLayout = () => {
  const {isLoggedIn} = useSelector((state)=> state.auth)
  // const { isAuthenticated } = useAuth();
  if(!isLoggedIn){
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
