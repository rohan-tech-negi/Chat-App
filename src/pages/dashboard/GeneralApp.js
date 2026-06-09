import React, {Suspense, lazy} from "react";
import Chats from "./Chats";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/conversation";
// const Cat = lazy(()=> import ('../../components/Cat.js'))
const GeneralApp = () => {
  const theme = useTheme()

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats></Chats>

      {/* conversation */}
      <Box sx={{height: "100%", width: "calc(100vw - 420px)", backgroundColor: theme.palette.mode === 'light' ? "#F5F5F5" : theme.palette.background.paper}}>
        {/*  */}
        <Conversation></Conversation>

      </Box>
    </Stack>
  );
};

export default GeneralApp;
