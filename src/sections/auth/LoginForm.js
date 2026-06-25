import React from 'react'
import * as Yup from "yup";

import { useForm } from "react-hook-form";
import FormProvider from '../../components/hook-form/FormProvider'
import { useState } from 'react';

const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false);

   const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

    </FormProvider>
  )
}

export default LoginForm