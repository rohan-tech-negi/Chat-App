import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Stack spacing={2} sx={{mb:5 , position: "relative"}}>   
      <Typography variant='h4'>Login to Tawk</Typography>
      <Stack direction="row" spacing={0.5}>
          <Typography variant='body2'>New User?</Typography>
          <Link>
          </Link>
      </Stack>
    </Stack>
    </>
  )
}

export default Login