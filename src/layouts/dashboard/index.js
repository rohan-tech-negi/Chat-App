import { Avatar, Box, Divider, IconButton, Stack, Switch, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Nav_Buttons, Nav_Setting } from "../../data";
import Logo from "../../assets/Images/logo.ico"
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { styled } from "@mui/material/styles";
import useSettings from "../../hooks/useSettings.js"


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


const DashboardLayout = () => {

  const theme = useTheme()

  const [selected, setSelected] = useState(0)

  console.log(theme)

  const {onToggleMode} = useSettings()

  return (
    <Stack direction="row">
     {/* sidebar */}
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
