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
  const { isLoggedIn } = useSelector((state) => state.auth);

  const user_id = window.localStorage.getItem("user_id");

  useEffect(() => {
    if (isLoggedIn) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      
      if (!socket) {
        connectSocket(user_id);
      }
      socket.on("new_friend_request", (data) => {
        toast.success("New friend request received");
      });

      socket.on("request_accepted", (data) => {
        toast.success("friend request accepted");
      });
      socket.on("request_sent", (data) => {
        toast.success("friend request accepted");
      });

      
    }

    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
      socket?.off("start_chat")
    };
  }, [isLoggedIn, socket]);
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
