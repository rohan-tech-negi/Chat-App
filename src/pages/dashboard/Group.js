import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search'
import { MagnifyingGlass } from 'phosphor-react'

const Group = () => {
    
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


            </Stack>
        </Box>
    {/* right */}
    </Stack>
    </>
  )
}

export default Group