import {useState} from 'react'
import * as Yup from 'yup'
import {useDispatch, useSelector} from "react-redux"


const RegisterForm = () => {
     const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });
   const defaultValues = {
    firstName: "",
    lastName: "",
    email: "demo@tawk.com",
    password: "demo1234",
  };
  return (
    <div>RegisterForm</div>
  )
}

export default RegisterForm