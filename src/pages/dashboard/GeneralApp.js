import React, {Suspense, lazy} from "react";
import Chats from "./Chats";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
// const Cat = lazy(()=> import ('../../components/Cat.js'))
const GeneralApp = () => {
  const theme = useTheme()
  const {sideBar} = useSelector((store)=>(store.app))

 

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats></Chats>

      {/* conversation */}
      <Box sx={{height: "100%", width: sideBar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)", backgroundColor: theme.palette.mode === 'light' ? "#F5F5F5" : theme.palette.background.paper}}>
        {/*  */}
        <Conversation></Conversation>

      </Box>

      {/* contact info */}
      {sideBar.open && (()=>{
        switch (sideBar.type) {
          case value:
            
            break;
        
          default:
            break;
        }
      }) ()}
    </Stack>
  );
};

export default GeneralApp;
