import React from 'react'
import FormProvider from '../../components/hook-form/FormProvider'

const LoginForm = () => {
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

    </FormProvider>
  )
}

export default LoginForm