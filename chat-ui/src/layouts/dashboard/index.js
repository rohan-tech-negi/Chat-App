import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar.js";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../../socket.js";
import toast from "react-hot-toast";

const isAuthenticated = true;

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user_id } = useSelector((state) => state.auth);
  const {conversation} = useSelector((state)=> state.conversation.direct_chat)

  useEffect(() => {
    if (isLoggedIn && user_id) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      
      if (!socket) {
        connectSocket(user_id);
      }
      socket?.on("new_friend_request", (data) => {
        toast.success("New friend request received");
      });

      socket?.on("request_accepted", (data) => {
        toast.success("friend request accepted");
      });
      socket?.on("request_sent", (data) => {
        toast.success("friend request accepted");
      });
      socket.on("start_chat",(data)=>{
          console.log(data)

          const existing_conversation = conversation.find((el)=> el.id === data._id);
      })

      
    }

    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
      socket?.off("start_chat")
    };
  }, [isLoggedIn, socket, user_id]);
  if (!isLoggedIn) {
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
