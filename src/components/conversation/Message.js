import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline, DocMsg } from './MsgTypes'

const Message = ({menu}) => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
            {Chat_History.map((el)=>{
                switch (el.type) {
                    case "divider":
                        return <Timeline el={el}></Timeline>;
                        
                    case "msg":
                        switch (el.subtype) {
                            case "img":
                                // img msg
                                return <MediaMsg el={el} menu={menu}></MediaMsg>;
                            case "doc":
                                // doc msg
                                return <DocMsg el={el} menu={menu}></DocMsg>;
                            case "link":
                                // link msg
                                return <LinkMsg el={el} menu={menu}></LinkMsg>;
                            case "reply":
                                // reply msg
                                return <ReplyMsg el={el} menu={menu}></ReplyMsg>;
                            default:
                                return <TextMsg el={el} menu={menu}></TextMsg>;
                        }
                    default:
                        return null;
                }
            })}
        </Stack>
    </Box>
  )
}

export default Message