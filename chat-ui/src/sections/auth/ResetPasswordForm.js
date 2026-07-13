import React from "react";
import * as Yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { useState } from "react";
import { Alert, Button, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";

const ResetPasswordForm = () => {
  

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });

  const defaultValues = {
    email: "demo@tawk.com",
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
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
      // console.lo/g(data);
      
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
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <RHFTextField name="email" label="Email address" />
        <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        // loading={isLoading}
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        Send Request
      </Button>
      </Stack>

      
    </FormProvider>
  );
};

export default ResetPasswordForm;
