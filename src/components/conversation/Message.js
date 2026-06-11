import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import LinkMsg, { MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes'

const Message = () => {
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
                                    return <MediaMsg el={el}></MediaMsg>
                                    
                                    break;
                                    case "doc":
                                    // img msg
                                    
                                    break;
                                    case "link":
                                    // img msg
                                    return <LinkMsg el={el}></LinkMsg>
                                    
                                    break;
                                    case "reply":
                                    // img msg
                                    return <ReplyMsg el={el}></ReplyMsg>
                                    
                                    break;
                            
                                default:
                                    return <TextMsg el={el}></TextMsg>;
                                    
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