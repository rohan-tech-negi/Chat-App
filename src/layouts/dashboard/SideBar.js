import { useTheme } from '@mui/material'
import React from 'react'

const SideBar = () => {
    const theme = useTheme()
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
        {Nav_Buttons.map((el)=> 
          el.index === selected ? (
            <Box sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5}} key={el.index}>
              <IconButton sx={{width:"max-content", color: theme.palette.mode === "light" ? "white" : theme.palette.text.primary}}>{el.icon}</IconButton>
            </Box>
          ) : (
            <IconButton onClick={()=>{
              setSelected(el.index)
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
              setSelected(el.index)
            }} sx={{width:"max-content", color: theme.palette.mode === "light" ? "black" : theme.palette.text.primary}} key={el.index}>{el.icon}</IconButton>
          )
        )}

        
      </Stack>


        </Stack>
      
      <Stack spacing={4}>
        <AntSwitch onChange={()=>{
          onToggleMode()
        }} defaultChecked></AntSwitch>
        <Avatar src={faker.image.avatar()}></Avatar>
      </Stack>

      

      
      
 </Stack>
     </Box>
  )
}

export default SideBar