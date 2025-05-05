import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Stack from '@mui/material/Stack'
import InputAdornment from "@mui/material/InputAdornment";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import AccountCircle from '@mui/icons-material/AccountCircle'
// import MailOutlineIcon from '@mui/icons-material/MailOutline'
// import LockIcon from '@mui/icons-material/Lock'
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "./signup.css";
import fbimg from "../assets/fbimg.png";
import appleimg from "../assets/apple.png";
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl'
// import Select from '@mui/material/Select'
import { useState } from "react";
import googleimg from "../assets/google.png";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
// import { useNavigate } from 'react-router-dom'
import cover from "../assets/cover.jpg";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router";

const schema = yup.object().shape({

  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
    organization:yup
    .string()
    .required("organization is required"),

    role: yup.string().required("Role is required"),
});
interface formData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  organization:string
  role:string
}
const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate=useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = (data: formData) => {
    console.log(data);


   
        const user=localStorage.getItem("signupUsers") || "[]"
        const oldData=JSON.parse(user)
        localStorage.setItem("signupUsers",JSON.stringify([...oldData, data]))
        console.log("hi this is user")
        navigate('/login')
        
    
 
    // setTimeout(() => {
    //   toast.success("account created successfully");
    //   //   navigate('/login');
    // }, 3000);
  };

  return (
    <>
      <ToastContainer />
      <Box display={"flex"} paddingTop={"6%"} border={"1px solid black"} width={'100vw'}>
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
            border: "1px solid black",
          }}
        ></Box>

        {/* right box */}
        <Box
          sx={{
            minWidth: 300,
            mx: "auto",
            mt: 5,
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            width: "50%",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Signup
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
          


            <TextField
              label="Name"
              fullWidth
              margin="normal"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

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

            <TextField
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleConfirmPasswordVisibility}
                      edge="end"
                    >
                      {showConfirmPassword ? (
                        <MdVisibilityOff />
                      ) : (
                        <MdOutlineVisibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

<TextField
              label="Organization"
              fullWidth
              margin="normal"
              {...register("organization")}
              error={!!errors.organization}
              helperText={errors.organization?.message}
            />

<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="admin" control={<Radio  {...register("role")} />} label="Admin" />
        <FormControlLabel value="user" control={<Radio  {...register("role")} />} label="User" />
     
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Signup
            </Button>

            <Box>
              <Typography marginTop={3} textAlign={"center"}>
                sign in with
              </Typography>
              <Box marginLeft={"45%"} paddingTop={2}>
                <img className="fb-img" src={fbimg}></img>
                <img className="google-img" src={appleimg}></img>
                <img className="apple-img" src={googleimg}></img>
              </Box>
              <Box display={"flex"} marginLeft={"38%"} marginTop={2}>
                <Typography>Already have an account? </Typography>
                <Typography color="#3FB6FF">login </Typography>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
