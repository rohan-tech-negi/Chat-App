import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar.js";
import {useSelector} from "react-redux"
import { connectSocket, socket } from "../../socket.js";



const isAuthenticated = true;

const DashboardLayout = () => {
  const {isLoggedIn} = useSelector((state)=> state.auth)

  const user_id = window.localStorage.getItem("user_id")  

  useEffect(()=>{
    if(isLoggedIn){
      window.onload = function(){
        if(!window.location.hash){
          window.location = window.location + '#loaded'
          window.location.reload()
        }
      }

      window.reload()
      if(!socket){
        connectSocket(user_id)
      }


      
    }
  },[isLoggedIn, socket])
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
