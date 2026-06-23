import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useTheme
} from "@mui/material"
import { Bell, CaretRight, Clock, Lock, Phone, Prohibit, Star, VideoCamera, Warning, X } from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { ToggleSidebar } from '../radux/slices/app'
import { faker } from '@faker-js/faker'
import AntSwitch from './AntSwitch'

const Contact = () => {
  const theme = useTheme()
  const dispatch = useDispatch()

  const [mute, setMute] = useState(false)
  const [openDisappearing, setOpenDisappearing] = useState(false)
  const [disappearingDuration, setDisappearingDuration] = useState("Off")
  const [openEncryption, setOpenEncryption] = useState(false)
  const [openBlock, setOpenBlock] = useState(false)
  const [openReport, setOpenReport] = useState(false)
  const [isBlocked, setIsBlocked] = useState(false)

  // Use state variables for contact details so they are dynamic and stable across re-renders
  const [contactName] = useState(faker.name.fullName())
  const [contactPhone] = useState(faker.phone.number())
  const [contactAvatar] = useState(faker.image.avatar())

  // Keep faker images static for the media list during re-renders
  const [mediaImages] = useState(() => [faker.image.food(), faker.image.food(), faker.image.food()])
  const [groupAvatar] = useState(() => faker.image.abstract())

  return (
    <Box sx={{
        height: "100vh",
        width: 320,
        backgroundColor: theme.palette.mode === "light" ? "white" : theme.palette.background.paper
    }}>

      <Stack sx={{height: "100%"}}>
        <Box sx={{
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          width: "100%",
          backgroundColor: theme.palette.mode === "light" ? "#F5F5F5" : theme.palette.background.paper
        }}>
          <Stack sx={{height: "100%", p:2}} direction="row" alignItems={"center"} justifyContent="space-between" spacing={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Contact Info</Typography>
            <IconButton onClick={()=> {
              dispatch(ToggleSidebar())
            }}>
              <X></X>
            </IconButton>

          </Stack>

        </Box>

        {/* body */}
        <Stack sx={{height: "100%", position: "relative", flexGrow: 1, overflowY: "auto"}} p={3} spacing={3}>
            <Stack alignItems={"center"} direction="row" spacing={2}>
              <Avatar src={contactAvatar} sx={{ width: 56, height: 56 }}></Avatar>
              <Stack spacing={0.5}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  {contactName}
                </Typography>
                <Typography variant='body2' color="textSecondary">
                  {contactPhone}
                </Typography>

              </Stack>
            </Stack>

            <Stack direction="row" alignItems={"center"} justifyContent="space-evenly">
              <Stack spacing={1} alignItems="center">
                <IconButton disabled={isBlocked}>
                  <Phone></Phone>
                </IconButton>
                <Typography variant="caption" sx={{ fontWeight: 500 }}>
                  Call
                </Typography>
              </Stack>
              <Stack spacing={1} alignItems="center">
                <IconButton disabled={isBlocked}>
                  <VideoCamera></VideoCamera>
                </IconButton>
                <Typography variant="caption" sx={{ fontWeight: 500 }}>
                  Video
                </Typography>
              </Stack>
            </Stack>

            <Divider></Divider>

            <Stack spacing={0.5}>
              <Typography variant="subtitle2" color="textSecondary">About</Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>Joined</Typography>
            </Stack>
            
            <Divider></Divider>

            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle2">Media, Links & docs</Typography>
              <Button variant='text' size="small" endIcon={<CaretRight></CaretRight>} sx={{ textTransform: "none", color: "primary.main" }}>
                401
              </Button>
            </Stack>
            
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
              {mediaImages.map((src, el) => (
                <Box key={el} sx={{ width: 70, height: 70, borderRadius: 1.5, overflow: "hidden" }}>
                  <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              ))}
            </Stack>

            <Divider></Divider>
            
            {/* Starred Messages */}
            <Stack 
              direction="row" 
              alignItems="center" 
              justifyContent="space-between" 
              sx={{ cursor: "pointer" }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Star size={20}></Star>
                <Typography variant='subtitle2'>Starred Messages</Typography>
              </Stack>
              <CaretRight size={20}></CaretRight>
            </Stack>

            <Divider />

            {/* Mute Notifications */}
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="row" alignItems="center" spacing={2}>
                <Bell size={20} />
                <Typography variant="subtitle2">Mute notifications</Typography>
              </Stack>
              <AntSwitch checked={mute} onChange={(e) => setMute(e.target.checked)} />
            </Stack>

            <Divider />

            {/* Disappearing Messages */}
            <Stack 
              direction="row" 
              alignItems="center" 
              justifyContent="space-between" 
              sx={{ cursor: "pointer" }}
              onClick={() => setOpenDisappearing(true)}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Clock size={20} />
                <Stack spacing={0.2}>
                  <Typography variant="subtitle2">Disappearing messages</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {disappearingDuration}
                  </Typography>
                </Stack>
              </Stack>
              <CaretRight size={20} />
            </Stack>

            {/* Encryption */}
            <Stack 
              direction="row" 
              alignItems="start" 
              justifyContent="space-between" 
              sx={{ cursor: "pointer" }}
              onClick={() => setOpenEncryption(true)}
            >
              <Stack direction="row" alignItems="start" spacing={2}>
                <Lock size={20} style={{ marginTop: 2 }} />
                <Stack spacing={0.2} sx={{ pr: 2 }}>
                  <Typography variant="subtitle2">Encryption</Typography>
                  <Typography variant="caption" color="textSecondary" sx={{ fontSize: "0.75rem", lineHeight: 1.2 }}>
                    Messages and calls are end-to-end encrypted. Click to verify.
                  </Typography>
                </Stack>
              </Stack>
              <CaretRight size={20} style={{ alignSelf: "center" }} />
            </Stack>

            <Divider />

            {/* Groups in Common */}
            <Stack spacing={2}>
              <Typography variant="subtitle2" color="textSecondary">
                1 Group in common
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar alt="Meme Group" src={groupAvatar} />
                <Stack spacing={0.2}>
                  <Typography variant="subtitle2">Meme Group</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {contactName}, Rohan, and 5 others
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Divider />

            {/* Block / Report Actions */}
            <Stack spacing={1} sx={{ width: "100%" }}>
              <Button 
                onClick={() => setOpenBlock(true)} 
                startIcon={<Prohibit size={20} />} 
                fullWidth 
                sx={{ 
                  justifyContent: "flex-start", 
                  color: theme.palette.error.main,
                  py: 1.2,
                  px: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'light' ? 'rgba(211, 47, 47, 0.04)' : 'rgba(244, 67, 54, 0.08)'
                  }
                }}
              >
                {isBlocked ? `Unblock ${contactName}` : `Block ${contactName}`}
              </Button>

              <Button 
                onClick={() => setOpenReport(true)} 
                startIcon={<Warning size={20} />} 
                fullWidth 
                sx={{ 
                  justifyContent: "flex-start", 
                  color: theme.palette.error.main,
                  py: 1.2,
                  px: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'light' ? 'rgba(211, 47, 47, 0.04)' : 'rgba(244, 67, 54, 0.08)'
                  }
                }}
              >
                Report {contactName}
              </Button>
            </Stack>
        </Stack>
        
      </Stack>

      {/* Disappearing Messages Dialog */}
      <Dialog 
        open={openDisappearing} 
        onClose={() => setOpenDisappearing(false)}
        keepMounted
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 3,
            p: 1,
            width: "100%",
            maxWidth: 360
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>Disappearing messages</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2, fontSize: "0.875rem" }}>
            Make messages in this chat disappear. For more privacy and storage, new messages will disappear from this chat for everyone after the selected duration.
          </DialogContentText>
          <RadioGroup 
            value={disappearingDuration} 
            onChange={(e) => setDisappearingDuration(e.target.value)}
          >
            {[
              { value: "24 hours", label: "24 hours" },
              { value: "7 days", label: "7 days" },
              { value: "90 days", label: "90 days" },
              { value: "Off", label: "Off" }
            ].map((option) => (
              <FormControlLabel 
                key={option.value}
                value={option.value} 
                control={<Radio color="primary" />} 
                label={option.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: "0.9rem",
                    fontWeight: disappearingDuration === option.value ? 600 : 400
                  }
                }}
              />
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDisappearing(false)} color="inherit" sx={{ fontWeight: 600 }}>
            Cancel
          </Button>
          <Button onClick={() => setOpenDisappearing(false)} variant="contained" color="primary" sx={{ borderRadius: 2, fontWeight: 600 }}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>

      {/* Encryption Dialog */}
      <Dialog 
        open={openEncryption} 
        onClose={() => setOpenEncryption(false)}
        keepMounted
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 3,
            p: 2,
            width: "100%",
            maxWidth: 400
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: 600, textAlign: "center" }}>Verify Security Code</DialogTitle>
        <DialogContent sx={{ textAlign: "center" }}>
          <DialogContentText sx={{ mb: 3, fontSize: "0.875rem" }}>
            To verify that messages and calls with {contactName} are end-to-end encrypted, scan this code on their phone, or compare these numbers.
          </DialogContentText>
          
          <Box 
            sx={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(10, 1fr)", 
              gap: "2px", 
              width: 120, 
              height: 120, 
              p: 1.5, 
              backgroundColor: "white", 
              borderRadius: 2, 
              border: "1px solid #e0e0e0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              mx: "auto",
              mb: 3
            }}
          >
            {Array.from({ length: 100 }).map((_, idx) => {
              const row = Math.floor(idx / 10);
              const col = idx % 10;
              const isTopLeft = row < 3 && col < 3;
              const isTopRight = row < 3 && col >= 7;
              const isBottomLeft = row >= 7 && col < 3;
              
              if (isTopLeft) {
                return <Box key={idx} sx={{ backgroundColor: (row === 1 && col === 1) ? "white" : "black" }} />;
              }
              if (isTopRight) {
                return <Box key={idx} sx={{ backgroundColor: (row === 1 && col === 8) ? "white" : "black" }} />;
              }
              if (isBottomLeft) {
                return <Box key={idx} sx={{ backgroundColor: (row === 8 && col === 1) ? "white" : "black" }} />;
              }
              
              const fill = ((idx * 7) + (row * col * 3)) % 5 === 0 || ((idx * 13) % 7 === 3);
              return <Box key={idx} sx={{ backgroundColor: fill ? "black" : "white" }} />;
            })}
          </Box>

          <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2} sx={{ mb: 2, maxWidth: 300, mx: "auto" }}>
            {[
              "45230", "89712", "30495", 
              "11928", "73829", "01928"
            ].map((num, i) => (
              <Typography key={i} variant="body2" sx={{ fontFamily: "monospace", fontSize: "1.1rem", fontWeight: 600, letterSpacing: 1, px: 1 }}>
                {num}
              </Typography>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button onClick={() => setOpenEncryption(false)} variant="contained" color="primary" sx={{ borderRadius: 2, px: 4, py: 1, fontWeight: 600 }}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      {/* Block Dialog */}
      <Dialog 
        open={openBlock} 
        onClose={() => setOpenBlock(false)}
        keepMounted
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 3,
            p: 1,
            width: "100%",
            maxWidth: 320
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>
          {isBlocked ? `Unblock ${contactName}?` : `Block ${contactName}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: "0.875rem" }}>
            {isBlocked 
              ? `Unblocked contacts will be able to call you and send you messages.`
              : `Blocked contacts will no longer be able to call you or send you messages.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenBlock(false)} color="inherit" sx={{ fontWeight: 600 }}>
            Cancel
          </Button>
          <Button 
            onClick={() => {
              setIsBlocked(!isBlocked);
              setOpenBlock(false);
            }} 
            variant="contained" 
            color="error" 
            sx={{ borderRadius: 2, fontWeight: 600 }}
          >
            {isBlocked ? "Unblock" : "Block"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Report Dialog */}
      <Dialog 
        open={openReport} 
        onClose={() => setOpenReport(false)}
        keepMounted
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 3,
            p: 1,
            width: "100%",
            maxWidth: 340
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>Report {contactName}?</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2, fontSize: "0.875rem" }}>
            The last 5 messages from this contact will be forwarded to WhatsApp. This contact will not be notified.
          </DialogContentText>
          <FormControlLabel 
            control={<Checkbox color="primary" defaultChecked />} 
            label="Block contact and clear chat"
            sx={{
              '& .MuiTypography-root': {
                fontSize: "0.875rem"
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenReport(false)} color="inherit" sx={{ fontWeight: 600 }}>
            Cancel
          </Button>
          <Button 
            onClick={() => {
              setIsBlocked(true);
              setOpenReport(false);
            }} 
            variant="contained" 
            color="error" 
            sx={{ borderRadius: 2, fontWeight: 600 }}
          >
            Report
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default Contact