import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const AuthSocial = () => {
  return (
    <div>
        <Divider sx={{my:2, typography: "overline", color: "text-disabled", "&::before, &::after" : {
            borderTopStyle: "dashed"
        }}}>
            Or
        </Divider>

        <Stack direction={"row"}>

        </Stack>
    </div>
  )
}

export default AuthSocial