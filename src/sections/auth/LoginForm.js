import React from 'react'
import * as Yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../components/hook-form/FormProvider'
import { useState } from 'react';
import { Alert, Stack } from '@mui/material';

const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false);

   const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

    const defaultValues = {
    email: "demo@tawk.com",
    password: "demo1234",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

    const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

   const onSubmit = async (data) => {
    try {
      console.log(data);
      // submit data to backend
      
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
<Stack  spacing={3}>
    {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        
</Stack>
    </FormProvider>
  )
}

export default LoginForm