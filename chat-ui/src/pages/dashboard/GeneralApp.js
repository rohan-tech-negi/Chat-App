import React from "react";
import Chats from "./Chats";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessage from "../../components/SharedMessage";
import StarredMessages from "../../components/StarredMessages";
// const Cat = lazy(()=> import ('../../components/Cat.js'))
import NoChat from "../../assets/Illustration/NoChat";

const GeneralApp = () => {
  const theme = useTheme()
  const {sideBar, chat_type, room_id} = useSelector((store)=>(store.app))

 

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats></Chats>

      {/* conversation */}
      <Box sx={{height: "100%", width: sideBar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)", backgroundColor: theme.palette.mode === 'light' ? "#F5F5F5" : theme.palette.background.paper}}>
        {/*  */}
        {room_id !== null && chat_type === "individual" ? <Conversation></Conversation> : 
          <Stack spacing={2} sx={{height: "100%" , width: "100%"}} alignItems="center" justifyContent="center">
            <NoChat></NoChat>
              <Typography>
                Select a conversation or start a new one
              </Typography>
          </Stack>
        }
        <Conversation></Conversation>

      </Box>

      {/* contact info */}
      {sideBar.open && (()=>{
        switch (sideBar.type) {
          case "CONTACT":
            return <Contact/>
          case "STARRED":
            return <StarredMessages/>
          case "SHARED":
            return <SharedMessage></SharedMessage>
        
          default:
            break;
        }
      }) ()}
    </Stack>
  );
};

export default GeneralApp;
