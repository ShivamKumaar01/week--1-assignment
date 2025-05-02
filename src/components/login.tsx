import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "./signup.css";
import fbimg from "../assets/fbimg.png";
import appleimg from "../assets/apple.png";

import { useState } from "react";
import googleimg from "../assets/google.png";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import cover from "../assets/cover.jpg";

const schema = yup.object().shape({
  //   role: yup.string().required("Role is required"),
  //   name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must have at least one uppercase letter")
    .matches(/[a-z]/, "Password must have at least one lowercase letter")
    .matches(/[0-9]/, "Password must have at least one number")
    .matches(/[@$!%*?&#]/, "Password must have at least one special character")
    .required("Password is required"),
});
interface formData {
  // name:string,
  email: string;
  password: string;
  // confirmPassword:string;
}
const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  //   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = (data: formData) => {
    console.log(data);
    // console.log(typeof(data));
    

    // console.log(typeof user, "this is in login");

    // setTimeout(() => {
    //   // toast.success("Login successfully")
    //   navigate("/login");
    // }, 3000);
  };
  
  return (
    <>
      <ToastContainer />
      <Box display={"flex"} paddingTop={"6%"} width={'100vw'}>
        {/* left img */}

        {/* <Box border={'1px solid black'} width={'50%'}></Box> */}

        <Box
          sx={{
            backgroundImage: `url(${cover})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "685px",
            width: "50%",
            borderRadius: "7px",
          }}
        ></Box>

        {/* right box */}
        <Box
          sx={{
            minWidth: 300,
            mx: "auto",
            mt: 15,
            p: 3,
            mb: 13,
            boxShadow: 3,
            borderRadius: 2,
            width: "50%",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? (
                        <MdVisibilityOff />
                      ) : (
                        <MdOutlineVisibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>

            <Box>
              <Typography marginTop={3} textAlign={"center"}>
                login with
              </Typography>
              <Box marginLeft={"45%"} paddingTop={2}>
                <img className="fb-img" src={fbimg}></img>
                <img className="google-img" src={appleimg}></img>
                <img className="apple-img" src={googleimg}></img>
              </Box>
              <Box display={"flex"} marginLeft={"38%"} marginTop={2}>
                <Typography>Don't have an account? </Typography>
                <Typography color="#3FB6FF" >
                  signup{" "}
                </Typography>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;