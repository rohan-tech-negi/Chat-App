import { Stack } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <>
     <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Get started with Tawk.</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2"> Already have an account? </Typography>

          <Link component={RouterLink} to={"/auth/login"} variant="subtitle2">
            Sign in
          </Link>
        </Stack>
      </Stack>
    </>
  )
}

export default Register