import { Box, Divider, Stack, Typography, useTheme, IconButton, alpha } from '@mui/material'
import { DownloadSimple, File } from 'phosphor-react'
import React from 'react'


const LinkMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content", maxWidth: "70%" }}>
                <Stack spacing={1.5}>
                    <Stack p={1} spacing={1.5} sx={{ backgroundColor: el.incoming ? alpha(theme.palette.common.black, 0.03) : alpha(theme.palette.common.black, 0.2), borderRadius: 1 }}>
                        <img src={el.preview} style={{ maxHeight: 210, borderRadius: "10px", width: "100%", objectFit: "cover" }} alt={el.message}></img>
                        <Stack spacing={0.5}>
                            <Typography variant="subtitle2" sx={{ color: el.incoming ? theme.palette.text.primary : "#fff", fontWeight: 600 }}>Creating Chat App</Typography>
                            <Typography variant="caption" sx={{ color: el.incoming ? theme.palette.primary.main : "rgba(255,255,255,0.8)" }} component="a" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                www.youtube.com
                            </Typography>
                        </Stack>
                    </Stack>
                    <Box px={1} pb={0.5}>
                        <Typography variant='body2' color={el.incoming ? theme.palette.text.primary : "#fff"}>
                            {el.message}
                        </Typography>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    )
}

const ReplyMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content", maxWidth: "70%" }}>
                <Stack spacing={1.5}>
                    <Stack p={1} direction="column" spacing={0.5} sx={{
                        backgroundColor: el.incoming ? alpha(theme.palette.common.black, 0.03) : alpha(theme.palette.common.black, 0.2), 
                        borderRadius: 1,
                        borderLeft: `4px solid ${el.incoming ? theme.palette.primary.main : theme.palette.common.white}`,
                        alignItems: "start"
                    }}>
                        <Typography variant='caption' sx={{ fontWeight: 600, color: el.incoming ? theme.palette.primary.main : theme.palette.common.white }}>
                            {el.incoming ? "Lucy" : "You"}
                        </Typography>
                        <Typography variant='body2' color={el.incoming ? theme.palette.text.secondary : "rgba(255, 255, 255, 0.8)"}>
                            {el.message}
                        </Typography>
                    </Stack>
                    <Typography variant='body2' color={el.incoming ? theme.palette.text.primary : "#fff"}>
                        {el.reply}
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    )
}

const MediaMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <Box p={.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content", maxWidth: "70%" }}>
                <Stack spacing={1}>
                    <img src={el.img} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px", width: "100%", objectFit: "cover" }} />
                    <Box px={1} pb={0.5}>
                        <Typography variant='body2' color={el.incoming ? theme.palette.text.primary : "#fff"}>
                            {el.message}
                        </Typography>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    )
}

const TextMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content", maxWidth: "70%" }}>
                <Typography variant='body2' color={el.incoming ? theme.palette.text.primary : "#fff"}>
                    {el.message}
                </Typography>
            </Box>
        </Stack>
    )
}

const DocMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content", maxWidth: "70%" }}>
                <Stack p={1} direction="row" spacing={2} alignItems="center" sx={{ 
                    backgroundColor: el.incoming ? alpha(theme.palette.common.black, 0.03) : alpha(theme.palette.common.black, 0.2), 
                    borderRadius: 1 
                }}>
                    <File size={36} color={el.incoming ? theme.palette.primary.main : theme.palette.common.white} />
                    <Typography variant='body2' sx={{ color: el.incoming ? theme.palette.text.primary : theme.palette.common.white }}>
                        {el.message}
                    </Typography>
                    <IconButton size="small" sx={{ color: el.incoming ? "inherit" : theme.palette.common.white }}>
                        <DownloadSimple />
                    </IconButton>
                </Stack>
            </Box>
        </Stack>
    )
}

const Timeline = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Divider width="46%" />
            <Typography variant='caption' sx={{ color: theme.palette.text.secondary }}>{el.text}</Typography>
            <Divider width="46%" />
        </Stack>
    )
}

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg }