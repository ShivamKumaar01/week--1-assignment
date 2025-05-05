// // import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// // import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { useEffect, useState } from 'react';
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import TextField from "@mui/material/TextField";
// import { MdVisibilityOff } from "react-icons/md";
// import { MdOutlineVisibility } from "react-icons/md";
// import InputAdornment from "@mui/material/InputAdornment";
// import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';


// const schema = yup.object().shape({
//   //   role: yup.string().required("Role is required"),
//   //   name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
//   team: yup
//     .string()
//     // .email("Invalid email format")
//     .required("Team Name is required"),
//   password: yup
//     .string()
//     .min(8, "Password must be at least 8 characters")
//     .matches(/[A-Z]/, "Password must have at least one uppercase letter")
//     .matches(/[a-z]/, "Password must have at least one lowercase letter")
//     .matches(/[0-9]/, "Password must have at least one number")
//     .matches(/[@$!%*?&#]/, "Password must have at least one special character")
//     .required("Password is required"),
//     role:yup
//     .string()
//     .required("Team lead is required")
// });
// interface formData {
//   // name:string,
//   team: string;
//   password: string;
//   role:string;
//   // name:string;
//   // confirmPassword:string;
// }
// interface User {
//   name: string;
//   role: string;
// }

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: 'white', // sets background to black
//   color: 'black',           // sets text color to white
//   padding: 4,
//   borderRadius: 2,
//   width: 300,
// };

// // const style = {
// //   position: 'absolute',
// //   top: '50%',
// //   left: '50%',
// //   transform: 'translate(-50%, -50%)',
// //   width: 400,
// //   bgcolor: 'background.paper',
// //   border: '2px solid #000',
// //   boxShadow: 24,
// //   p: 4,
// // };
// const Admin = () => {
//   const [open, setOpen] =useState(false);
//   const [userOptions, setUserOptions] = useState<string[]>([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   useEffect(() => {
//     const stored = localStorage.getItem("signupUsers");
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       const filtered = parsed.filter((u: any) => u.role === "user");
//       setUserOptions(filtered);
//       console.log("this is user options",userOptions);
//       console.log(typeof(userOptions),"this is type of user options");
//       console.log(filtered,typeof(filtered))
//     }
//   }, []);

//    const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm<formData>({
//       resolver: yupResolver(schema),
//     });
  
//     const [showPassword, setShowPassword] = useState(false);
//     //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   
  
//     const togglePasswordVisibility = () => setShowPassword(!showPassword);
//     const onSubmit = (data: formData) => {
//       console.log(data);
    
//     };
//   return (
//     <Box>

//       <Box sx={{}}>
//         <AppBar position="static">
//           <Toolbar variant="dense">
//             <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" color="inherit" component="div">
//               Photos
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <Box>

//         <h1>welcome Admin,{sessionStorage.getItem("Login")}</h1>
//         {/*  */}
//         <Box>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//         <form onSubmit={handleSubmit(onSubmit)}>

//         <FormControl fullWidth margin="normal">
//   <InputLabel id="team-select-label">Select User</InputLabel>
//   <Select
//     labelId="team-select-label"
//     value={selectedUser}
//     label="Select User"
//     onChange={(e) => setSelectedUser(e.target.value)}
//   >
//     {userOptions.map((user, index) => (
//       <MenuItem key={index} value={user.name}>
//         {user.name}
//       </MenuItem>
//     ))}
//   </Select>
//               {errors.team && (
//                 <Typography variant="caption" color="error">
//                   {errors.team.message}
//                 </Typography>
//               )}
//             </FormControl>






//                     <TextField
//                       label="Team Name"
//                       fullWidth
//                       margin="normal"
//                       {...register("team")}
//                       error={!!errors.team}
//                       helperText={errors.team?.message}
//                     />
        
//                     <TextField
//                       label="Password"
//                       type={showPassword ? "text" : "password"}
//                       fullWidth
//                       margin="normal"
//                       {...register("password")}
//                       error={!!errors.password}
//                       helperText={errors.password?.message}
//                       InputProps={{
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <IconButton onClick={togglePasswordVisibility} edge="end">
//                               {showPassword ? (
//                                 <MdVisibilityOff />
//                               ) : (
//                                 <MdOutlineVisibility />
//                               )}
//                             </IconButton>
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
        
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       color="primary"
//                       fullWidth
//                       sx={{ mt: 2 }}
//                     >
//                       Login
//                     </Button>
        
                  
//                   </form>
//         </Box>


        
                  






        
//       </Modal>
//     </Box>
//       </Box>


//     </Box>
//   )
// }

// export default Admin







import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
// import { MdVisibilityOff, MdOutlineVisibility } from "react-icons/md";
// import InputAdornment from "@mui/material/InputAdornment";
import { Select, MenuItem, FormControl, InputLabel, Typography as MuiTypography } from '@mui/material';

// Define a user type
interface User {
  name: string;
  role: string;
}

const schema = yup.object().shape({
  team: yup.string().required("Team Name is required"),
  teamLead:yup.string().required("Team Lead is required"),
  // password: yup
  //   .string()
  //   .min(8, "Password must be at least 8 characters")
  //   .matches(/[A-Z]/, "Password must have at least one uppercase letter")
  //   .matches(/[a-z]/, "Password must have at least one lowercase letter")
  //   .matches(/[0-9]/, "Password must have at least one number")
  //   .matches(/[@$!%*?&#]/, "Password must have at least one special character")
  //   .required("Password is required"),
});

interface formData {
  team: string;
  teamLead:string;
  // password: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  color: 'black',
  padding: 4,
  borderRadius: 2,
  width: 300,
};

const Admin = () => {
  const [open, setOpen] = useState(false);
  const [userOptions, setUserOptions] = useState<User[]>([]); // Store filtered users
  const [selectedUser, setSelectedUser] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const stored = localStorage.getItem("signupUsers");
    if (stored) {
      const parsed: User[] = JSON.parse(stored); // Parse data into User[]
      const filtered = parsed.filter((u) => u.role === "user"); // Filter by role
      setUserOptions(filtered); // Set the filtered users in state
    }
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  // const [showPassword, setShowPassword] = useState(false);
  // const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = (data: formData) => {
    
    console.log(data);
   

    const completeData = {
      ...data,
      user1: "",
      user2: "",
      user3: "",
      user4:""
    };
  
    // Save to localStorage
    const teamStorage = localStorage.getItem("Team") || "[]";
    const oldData = JSON.parse(teamStorage);
    const newData = [...oldData, completeData];
  
    localStorage.setItem("Team", JSON.stringify(newData));
    console.log("Team data saved:", newData);
    
    handleClose();
    
  };

  return (
    <Box>
      <Box>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <h1>Welcome Admin, {sessionStorage.getItem("Login")}</h1>
        <Box>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth margin="normal">
  <InputLabel id="team-select-label">Select Team Lead</InputLabel>
  <Select
    labelId="team-select-label"
    label="Select Team Lead"
    defaultValue=""
    {...register("teamLead")} // ✅ bind to form
    error={!!errors.teamLead}
  >
    {userOptions.map((user, index) => (
      <MenuItem key={index} value={user.name}>
        {user.name}
      </MenuItem>
    ))}
  </Select>
  {errors.teamLead && (
    <MuiTypography variant="caption" color="error">
      {errors.teamLead.message}
    </MuiTypography>
  )}
</FormControl>

                <TextField
                  label="Team Name"
                  fullWidth
                  margin="normal"
                  {...register("team")}
                  error={!!errors.team}
                  helperText={errors.team?.message}
                />

             

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;

