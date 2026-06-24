import { Avatar, Box, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react'
import React from 'react'
import { faker } from "@faker-js/faker"
import { useState } from 'react'
import Shortcuts from '../../sections/settings/Shortcuts'

const Settings = () => {
  const theme = useTheme()
  const [openTheme, setOpenTheme] = useState(false);
   const handleOpenTheme = () => {
    setOpenTheme(true);
  };

  const handleCloseTheme = () => {
    setOpenTheme(false);
  };
  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onclick: handleOpenTheme,
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Left Side */}
      <Box sx={{ overflowY: "scroll", height: "100vh", width: 320, boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)", backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background }}>
        <Stack p={4} spacing={5}>
          {/* header */}
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton>
              <CaretLeft size={24} color={'#435BD7'}></CaretLeft>
            </IconButton>
            <Typography variant='h6'>Settings</Typography>
          </Stack>

          {/* profile */}
          <Stack direction={"row"} spacing={3}>
            <Avatar  src={faker.image.avatar()}></Avatar>
            <Stack spacing={0.5}>
                <Typography variant='article'>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant='body2'>
                  {faker.random.word()}
                </Typography>
            </Stack>
          </Stack>

          {/* list of options */}
          <Stack spacing={4}>
              {list.map(({ key, icon, title, onclick }) => {
                return (
                  <>
                    <Stack
                      onClick={onclick}
                      sx={{ cursor: "pointer" }}
                      spacing={2}
                    >
                      <Stack alignItems={"center"} direction="row" spacing={2}>
                        {icon}
                        <Typography variant="body2">{title}</Typography>
                      </Stack>
                      {key !== 7 && <Divider />}
                    </Stack>
                  </>
                );
              })}
            </Stack>

        </Stack>
      </Box>
      <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts}></Shortcuts>
      
    </Stack>
    
  )
}

export default Settings