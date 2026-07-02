// import React from 'react'
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  Link,
  useTheme,
} from "@mui/material";
import { MagnifyingGlass, Phone } from "phosphor-react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { useDispatch, useSelector } from "react-redux";
// import { StartCall } from "../../components/StartCall";
// import CallLogElement from "../../components/CallLogElement";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { useState } from 'react';
import { CallLogElement } from "../../components/CallElement";
import {CallList} from "../../data/index"

const Call = () => {
    const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const theme  = useTheme()
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* Left */}

        <Box
          sx={{
            height: "100vh",
            width: 340,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,

            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
            <Stack
              alignItems={"center"}
              justifyContent="space-between"
              direction="row"
            >
              <Typography variant="h5">Call Log</Typography>
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>

            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              direction={"row"}
            >
              <Typography variant="subtitle2" sx={{}} component={Link}>
                Start a conversation
              </Typography>
              <IconButton onClick={handleOpenDialog}>
                <Phone style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack sx={{ flexGrow: 1, overflow: "hidden", height: "100%" }}>
              <SimpleBarStyle timeout={500} clickOnTrack={false} style={{ height: "100%" }}>
                <Stack spacing={2.4}>
                  {CallList.map((el, idx) => {
                    return <CallLogElement key={idx} {...el} />;
                  })}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {/* {openDialog && (
        <StartCall open={openDialog} handleClose={handleCloseDialog} />
      )} */}
    </>
  )
}

export default Call