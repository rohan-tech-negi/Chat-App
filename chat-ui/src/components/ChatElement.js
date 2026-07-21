
import { Avatar, Badge, Box, Button, Divider, IconButton, InputBase, Stack, Typography, alpha, styled, useTheme } from '@mui/material'
import StyledBadge from './StyledBadge';
import { useDispatch } from 'react-redux';
import { SelectConversation } from '../radux/slices/app';


const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  return (
    <Box 
    onClick={()=> {
      dispatch(SelectConversation({room_id: id}))
    }}
      sx={{
        width: "100%",
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
        borderRadius: 1,
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {online ? (
            <StyledBadge
            
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar src={img} />
            </StyledBadge>
          ) : (
            <Avatar src={img} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread} />
        </Stack>
      </Stack>
    </Box>
  );
};


export default ChatElement