import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search'
import { Link, MagnifyingGlass, Plus } from 'phosphor-react'
import { useState } from 'react'

const Group = () => {

   const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }
  const handleOpenDialog = () => {
    setOpenDialog(true);
  }

    const theme = useTheme();
    
  return (
    <>
    <Stack direction="row" sx={{ width: "100%" }}>
    {/* left */}
    <Box
          sx={{
            overflowY: "scroll",

            height: "100vh",
            width: 320,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,

            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >

            <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
                <Stack
              alignItems={"center"}
              justifyContent="space-between"
              direction="row"
            >
                <Typography variant="h5">Groups</Typography>
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
                Create New Group
              </Typography>
              <IconButton onClick={handleOpenDialog}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>


            </Stack>
        </Box>
    {/* right */}
    </Stack>
    </>
  )
}

export default Group