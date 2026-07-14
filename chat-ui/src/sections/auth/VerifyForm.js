import React from 'react'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const VerifyForm = () => {

      const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required("Code is required"),
    code2: Yup.string().required("Code is required"),
    code3: Yup.string().required("Code is required"),
    code4: Yup.string().required("Code is required"),
    code5: Yup.string().required("Code is required"),
    code6: Yup.string().required("Code is required"),
  });
    const defaultValues = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  };

    const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });
    const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

   const onSubmit = async (data) => {
    try {
      //   Send API Request
    //   dispatch(
    //     VerifyEmail({
    //       email,
    //       otp: `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`,
    //     })
    //   );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>VerifyForm</div>
  )
}

export default VerifyForm