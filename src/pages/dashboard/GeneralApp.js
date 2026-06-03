import React, {Suspense, lazy} from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
// const Cat = lazy(()=> import ('../../components/Cat.js'))
const GeneralApp = () => {

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats></Chats>

      {/* conversation */}
      <Box sx={{height: "100%", width: "calc(100vw - 420px)", backgroundColor: "#F5F5F5"}}>
        {/*  */}

      </Box>
    </Stack>
  );
};

export default GeneralApp;
