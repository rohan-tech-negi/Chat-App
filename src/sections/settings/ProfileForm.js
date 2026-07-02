import React from 'react'
import * as Yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../components/hook-form/FormProvider'
import { useState } from 'react';
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from '@mui/material';
import { RHFTextField } from '../../components/hook-form';
import { Eye, EyeSlash } from 'phosphor-react';
import { Link as RouterLink } from "react-router-dom";

const ProfileForm = () => {

 

   const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .required("name is required"),
    about: Yup.string().required("about is required"),

    avatarUrl : Yup.string().require("Avatar is required").nullable(true)
  });

    const defaultValues = {
    name: "",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

    const {
    reset,
    watch,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;


  

   const onSubmit = async (data) => {
    try {
      console.log(data);
      // submit data to backend
      console.log("Data", data)
      
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
        <RHFTextField name="email" label="Email address" />




</Stack>

 
      
    </FormProvider>
  )
}

export default ProfileForm