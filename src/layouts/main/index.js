import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
    <Container sx={{mt:5}} maxWidth ="sm">
      <Stack spacing={5}>
        <Stack sx={{width: "100vh"}} direction="column" alignItems={"center"}>

        </Stack>
      </Stack>
      <div>Main Layout</div>

      <Outlet />
    </Container>
    </>
  );
};

export default MainLayout;
