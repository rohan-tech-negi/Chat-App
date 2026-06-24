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
                                    return <MediaMsg el={el} menu={menu}></MediaMsg>
                                    
                                    break;
                                    case "doc":
                                    // doc msg
                                    return <DocMsg el={el} menu={menu}></DocMsg>
                                    
                                    break;
                                    case "link":
                                    // img msg
                                    return <LinkMsg el={el} menu={menu}></LinkMsg>
                                    
                                    break;
                                    case "reply":
                                    // img msg
                                    return <ReplyMsg el={el} menu={menu}></ReplyMsg>
                                    
                                    break;
                            
                                default:
                                    return <TextMsg el={el} menu={menu}></TextMsg>;
                                    
                            }
                        break;
                
                    default:
                        break;
                }
            })}
        </Stack>
    </Box>
  )
}

export default Message