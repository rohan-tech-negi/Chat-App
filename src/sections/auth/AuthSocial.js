import { Divider, IconButton, Stack, Typography } from '@mui/material'
import { GithubLogo, GoogleLogo, TwitterLogo } from 'phosphor-react'
import React from 'react'

const AuthSocial = () => {
  return (
    <div>
        <Divider sx={{my:2, typography: "overline", color: "text-disabled", "&::before, &::after" : {
            borderTopStyle: "dashed"
        }}}>
            Or
        </Divider>

        <Stack direction={"row"} justifyContent="center" spacing={2}>
            <IconButton>
                <GoogleLogo color='#DF3E30' size={32}></GoogleLogo>
            </IconButton>
            <IconButton color='inherit'>
                <GithubLogo  size={32}></GithubLogo>
            </IconButton>
            <IconButton>
                <TwitterLogo color='blue' size={32}></TwitterLogo>
            </IconButton>
        </Stack>
    </div>
  )
}

export default AuthSocial