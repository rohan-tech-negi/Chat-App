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
import { useCallback } from 'react';
import { LoadingButton } from '@mui/lab';

const ProfileForm = () => {

 

   const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .required("name is required"),
    about: Yup.string().required("about is required"),

    avatarUrl : Yup.string().required("Avatar is required").nullable(true)
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
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const values = watch();


  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

    //   setFile(file);

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );




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
        <RHFTextField name="name" label="name" helperText={"this name is visible to your contacts"}/>

         <RHFTextField multiline rows={4} name="about" label="About" maxRows={5}/>

         <Stack direction={"row"} justifyContent="end">
          <LoadingButton
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            // loading={isSubmitSuccessful || isSubmitting}
          >
            Save
          </LoadingButton>
        </Stack>




</Stack>

 
      
    </FormProvider>
  )
}

export default ProfileForm