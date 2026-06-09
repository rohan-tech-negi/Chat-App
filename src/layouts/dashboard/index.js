import { Avatar, Box, Divider, IconButton, Stack, Switch, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Nav_Buttons, Nav_Setting } from "../../data";
import Logo from "../../assets/Images/logo.ico"
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { styled } from "@mui/material/styles";
import useSettings from "../../hooks/useSettings.js"
import SideBar from "./SideBar.js";





const DashboardLayout = () => {

  const theme = useTheme()

  const [selected, setSelected] = useState(0)

  console.log(theme)

  const {onToggleMode} = useSettings()

  return (
    <Stack direction="row">
     {/* sidebar */}
     <SideBar></SideBar>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
