import React from 'react'

const Header = () => {
  return (
    <Box p={2} sx={{ width: "100%", backgroundColor: theme.palette.mode === 'light' ? "#F5F5F5" : theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"}}>
            <Stack alignItems={"center"} direction="row" justifyContent={"space-between"} sx={{width: "100%", height: "100%"}}>
                <Stack direction={"row"} spacing={2}>
                    <Box>
                        <StyledBadge overlap="circular" anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }} variant="dot" >
                            <Avatar src={faker.image.avatar()}>
                            </Avatar>
                        </StyledBadge>
                        
                    </Box>
                    <Stack spacing={0.2}>
                          <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                          <Typography variant="caption">online</Typography>
                        </Stack>
                </Stack>

                <Stack direction="row" alignItems={"center"} spacing={3}>
                  <IconButton>
                    <VideoCamera></VideoCamera>
                  </IconButton>
                  <IconButton>
                    <Phone></Phone>
                  </IconButton>
                  <IconButton>
                    <MagnifyingGlass></MagnifyingGlass>
                  </IconButton>
                  <Divider orientation='vertical' flexItem></Divider>
                  <IconButton>
                    <CaretDown></CaretDown>
                  </IconButton>
                </Stack>
            </Stack>

        </Box>
  )
}

export default Header