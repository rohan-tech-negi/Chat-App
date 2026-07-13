import React from 'react';
import { Box, IconButton, Stack, Divider, Avatar, Switch, useTheme , MenuItem, Menu} from "@mui/material";
import { styled } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Nav_Setting, Profile_Menu } from "../../data";
import useSettings from "../../hooks/useSettings.js";
import { LogoutUser } from '../../radux/slices/auth.js';
import { useDispatch } from 'react-redux';

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/app";
    case 1:
      return "/group";
    case 2:
      return "/call";
    case 3:
      return "/settings";
    default:
      return "/";
  }
};

const getMenuPath = (index) => {
  switch (index) {
    case 0:
      return "/profile";
    case 1:
      return "/settings";
    case 2:
      return "/auth/login";
  
    default:
      return "/";
  }
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
        // MUI v5 style dynamic check
        ...(theme.palette.mode === 'dark' && {
          backgroundColor: '#177ddc',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    // MUI v5 style dynamic check
    ...(theme.palette.mode === 'dark' && {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));





const SideBar = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate();



  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // alert(event.currentTarget)
    
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };
    const theme = useTheme();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const getSelectedIndex = (path) => {
      if (path.startsWith("/app")) return 0;
      if (path.startsWith("/group")) return 1;
      if (path.startsWith("/call")) return 2;
      if (path.startsWith("/settings")) return 3;
      return 0;
    };
    const selected = getSelectedIndex(pathname);
    const { onToggleMode } = useSettings();
  return (
    <Box p={2} sx={{backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width:100}}>

      <Stack direction="column" sx={{height:"100%"}} alignItems={"center"} spacing={3} justifyContent="space-between" > 
        <Stack alignItems={"center"} spacing={4}>
          <Box sx={{
        backgroundColor: theme.palette.primary.main, height: 64 , width: 64, borderRadius: 1.5
      }} >
        

       
        <img src={Logo} alt="chat app logo">
        </img>

      </Box>
      <Stack sx={{width: "max-content"}} direction="column" alignItems="center" spacing={3}>
        {Nav_Buttons.map( (el)=> 
          el.index === selected ? (
            <Box sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5}} key={el.index}>
              <IconButton sx={{width:"max-content", color: theme.palette.mode === "light" ? "white" : theme.palette.text.primary}}>{el.icon}</IconButton>
            </Box>
          ) : (
            <IconButton onClick={()=>{
              navigate(getPath(el.index));
              // navigate("/call")   
            }} sx={{width:"max-content",color: theme.palette.mode === "light" ? "black" : theme.palette.text.primary}} key={el.index}>{el.icon}</IconButton>
          )
        )}
        <Divider sx={{width: "48px"}} />
        {Nav_Setting.map((el) =>
          el.index === selected ? (
            <Box sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5}} key={el.index}>
              <IconButton sx={{width: "max-content", color: theme.palette.mode === "light" ? "black" : theme.palette.text.primary}}>{el.icon}</IconButton>
            </Box>
          ) : (
            <IconButton onClick={()=>{
              navigate(getPath(el.index));
            }} sx={{width:"max-content", color: theme.palette.mode === "light" ? "black" : theme.palette.text.primary}} key={el.index}>{el.icon}</IconButton>
          )
        )}

        
      </Stack>


        </Stack>
      
      <Stack spacing={4}>
        <AntSwitch onChange={()=>{
          onToggleMode()
        }} defaultChecked></AntSwitch>
        <Avatar id="basic-button" aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick} src={faker.image.avatar()}></Avatar>
        <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': buttonId,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >


        <Stack spacing={1} px={1}>
          {Profile_Menu.map((el, idx) => (
            <MenuItem  onClick={()=>{
              handleClick()
              
              
              
            }}>
              <Stack onClick={()=>{
                if(idx === 2){
                dispatch(LogoutUser())
              }else{
                navigate(getMenuPath(idx))

              }
              }} sx={{width: 100}} direction="row" alignItems="center" justifyContent="space-between">
                <span>
                  {el.title}
                </span>
                {el.icon}
                
              </Stack>{" "}
              
            </MenuItem>
          ))}
        </Stack>
      </Menu>
      </Stack>

      

      
      
 </Stack>
     </Box>
  )
}

export default SideBar