// // import React, { useEffect, useState } from 'react'
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Button from '@mui/material/Button';
// // import Modal from '@mui/material/Modal';
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import * as yup from "yup";
// // import { useForm } from "react-hook-form";
// // import TextField from "@mui/material/TextField";
// // // import { MdVisibilityOff, MdOutlineVisibility } from "react-icons/md";
// // // import InputAdornment from "@mui/material/InputAdornment";
// // import { Select, MenuItem, FormControl, InputLabel, Typography as MuiTypography } from '@mui/material';
// // import { Theme, useTheme } from '@mui/material/styles';
// // import { SelectChangeEvent } from '@mui/material/Select';
// // import OutlinedInput from '@mui/material/OutlinedInput';

// // const ITEM_HEIGHT = 48;
// // const ITEM_PADDING_TOP = 8;
// // const MenuProps = {
// //     PaperProps: {
// //         style: {
// //             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
// //             width: 250,
// //         },
// //     },
// // };

// // const data=localStorage.getItem("signupUsers")||"[]";
// // const List=JSON.parse(data);
// // console.log(List,"isko list me show krna hai",typeof(List));
// // const names=List.filter((user:any)=>user.role!=="admin")
// // console.log(names);



// // // const names = [
// // //     'Oliver Hansen',
// // //     'Van Henry',
// // //     'April Tucker',
// // //     'Ralph Hubbard',
// // //     'Omar Alexander',
// // //     'Carlos Abbott',
// // //     'Miriam Wagner',
// // //     'Bradley Wilkerson',
// // //     'Virginia Andrews',
// // //     'Kelly Snyder',
// // // ];

// // function getStyles(name: string, personName: string[], theme: Theme) {
// //     return {
// //         fontWeight: personName.includes(name)
// //             ? theme.typography.fontWeightMedium
// //             : theme.typography.fontWeightRegular,
// //     };
// // }




// // // Define a user type
// // interface User {
// //     name: string;
// //     role: string;
// // }

// // const schema = yup.object().shape({
// //     projectName: yup.string().required("Project Name is required"),
// //     teamLead: yup.string().required("Team Lead is required"),
  
// // });

// // interface formData {
// //     projectName: string;
// //     teamLead: string;
// //     // password: string;
// // }

// // const style = {
// //     position: 'absolute',
// //     top: '50%',
// //     left: '50%',
// //     transform: 'translate(-50%, -50%)',
// //     backgroundColor: 'white',
// //     color: 'black',
// //     padding: 4,
// //     borderRadius: 2,
// //     width: 300,
// // };

// // const TeamLead = () => {


// //     const [open, setOpen] = useState(false);
   

// //     const handleOpen = () => setOpen(true); 
// //     // const [selectedUser, setSelectedUser] = useState("");
// //     const handleClose = () => setOpen(false);

   

// //     const { register, handleSubmit, formState: { errors } } = useForm<formData>({
// //         resolver: yupResolver(schema),
// //     });


// //     const onSubmit = (data: formData) => {
// //         const user1 = personName[0] || null;
// //         const user2 = personName[1] || null;
// //         const user3 = personName[2] || null;
    
// //         const finalData = {
// //             ...data,
// //             user1,
// //             user2,
// //             user3
// //         };
    
// //         console.log("Final Submitted Data:", finalData);

// //         console.log(data);


       


// //     };



// //     const theme = useTheme();
// //     const [personName, setPersonName] = React.useState<string[]>([]);

// //     const handleChange = (event: SelectChangeEvent<typeof personName>) => {
// //         const {
// //             target: { value },
// //         } = event;
// //         setPersonName(
// //             // On autofill we get a stringified value.
// //             typeof value === 'string' ? value.split(',') : value,
// //         );
// //     };

// //     return (
// //         <Box>
// //             {/* appbar */}
// //             <Box sx={{ flexGrow: 1 }}>
// //                 <AppBar position="static">
// //                     <Toolbar variant="dense">
// //                         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
// //                             <MenuIcon />
// //                         </IconButton>
// //                         <Typography variant="h6" color="inherit" component="div">
// //                             Welcome
// //                         </Typography>
// //                     </Toolbar>
// //                 </AppBar>
// //             </Box>


// //             <Box sx={{ p: 2, border: '1px dashed grey' }}>
// //                 welcome {sessionStorage.getItem("Login")}


// //             </Box>
// //             <Box sx={{ p: 2, border: '1px dashed grey' }}>
// //                 <Button onClick={handleOpen}>Create Project</Button>
// //                 <Modal
// //                     open={open}
// //                     onClose={handleClose}
// //                     aria-labelledby="modal-modal-title"
// //                     aria-describedby="modal-modal-description"
// //                 >
// //                     <Box sx={style}>
// //                         <form onSubmit={handleSubmit(onSubmit)}>

// //                             <TextField
// //                                 label="Project Name"
// //                                 fullWidth
// //                                 margin="normal"
// //                                 {...register("projectName")}
// //                                 error={!!errors.projectName}
// //                                 helperText={errors.projectName?.message}
// //                             />






// //                             <FormControl sx={{ m: 1, width: 300 }}>
// //                                 <InputLabel id="demo-multiple-name-label">Name</InputLabel>
// //                                 <Select
// //                                     labelId="demo-multiple-name-label"
// //                                     id="demo-multiple-name"
// //                                     multiple
// //                                     value={personName}
// //                                     onChange={handleChange}
// //                                     input={<OutlinedInput label="Name" />}
// //                                     MenuProps={MenuProps}
// //                                 >
// //                                  {names.map((user: User) => (
// //   <MenuItem
// //     key={user.name}
// //     value={user.name}
// //     style={getStyles(user.name, personName, theme)}
// //   >
// //     {user.name}
// //   </MenuItem>
// // ))}
// //                                 </Select>
// //                             </FormControl>





// //                             <Button
// //                                 type="submit"
// //                                 variant="contained"
// //                                 color="primary"
// //                                 fullWidth
// //                                 sx={{ mt: 2 }}
// //                             >
// //                                 Submit
// //                             </Button>
// //                         </form>
// //                     </Box>
// //                 </Modal>
// //             </Box>


// //         </Box>
// //     )
// // }

// // export default TeamLead









import React, { useState } from 'react';
import {
  AppBar, Box, Toolbar, Typography, IconButton,
  Button, Modal, TextField, Select, MenuItem,
  FormControl, InputLabel, OutlinedInput
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Theme, useTheme } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';

// ================= Constants ==================
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  color: 'black',
  padding: 4,
  borderRadius: 2,
  width: 300,
};

// ================ Types ====================
interface User {
  name: string;
  role: string;
  isTeamLead: number;
  teamName: string;
}

interface FormData {
  projectName: string;
  teamMembers: string[];
}

// ============= Validation Schema ============
const schema = yup.object().shape({
  projectName: yup.string().required("Project Name is required"),
  teamMembers: yup.array().min(1, "Select at least one team member"),
});

// =========== Helper Functions ===============
function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

// =============== Component ===================
const TeamLead = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [personName, setPersonName] = useState<string[]>([]);

  // Access users from Redux store, with fallback to an empty array if undefined
  const user = useSelector((state: any) => state.user); // Adjust the selector if necessary

  // Ensure users exist and check their structure
  console.log(user, "Users Data");
  
  // Filter users
//   const filteredUsers = Array.isArray(user) ? user.filter(
//     (user: User) => user.role !== "admin" && user.isTeamLead === 0 && user.teamName === ""
//   ) : [];
const filterdUsers=user.users.filter((u)=>u.role!=="admin" && u.isTeamLead === 0 && u.teamName === "")
  
  console.log(filterdUsers, "Filtered Users");

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    const selected = typeof value === 'string' ? value.split(',') : value;
    setPersonName(selected);
    setValue('teamMembers', selected);
  };

  const onSubmit = (data: FormData) => {
    const finalData = {
      ...data,
      user1: data.teamMembers[0] || null,
      user2: data.teamMembers[1] || null,
      user3: data.teamMembers[2] || null,
    };

    console.log("Final Submitted Data:", finalData);
    setOpen(false);
  };

  return (
    <Box>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Welcome
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Welcome Message */}
      <Box sx={{ p: 2, border: '1px dashed grey' }}>
        Welcome {sessionStorage.getItem("Login")}
      </Box>

      {/* Create Project Button and Modal */}
      <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <Button variant="contained" onClick={() => setOpen(true)}>Create Project</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={modalStyle}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Project Name"
                fullWidth
                margin="normal"
                {...register("projectName")}
                error={!!errors.projectName}
                helperText={errors.projectName?.message}
              />

              <FormControl sx={{ mt: 2, width: '100%' }} error={!!errors.teamMembers}>
                <InputLabel id="team-select-label">Team Members</InputLabel>
                <Select
                  labelId="team-select-label"
                  id="team-select"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Team Members" />}
                  MenuProps={MenuProps}
                >
                  {filterdUsers.map((user: User) => (
                    <MenuItem
                      key={user.name}
                      value={user.name}
                      style={getStyles(user.name, personName, theme)}
                    >
                      {user.name}
                    </MenuItem>
                  ))}
                </Select>
                <Typography variant="caption" color="error">
                  {errors.teamMembers?.message}
                </Typography>
              </FormControl>

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
  );
};

export default TeamLead;


