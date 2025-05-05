
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
import { useDispatch, useSelector} from 'react-redux';
import { addUser, updateUser } from '../redux/slice';

// Define a user type
interface User {
  name: string;
  role: string;
}

const schema = yup.object().shape({
  team: yup.string().required("Team Name is required"),
  teamLead:yup.string().required("Team Lead is required"),

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
  const [userOptions, setUserOptions] = useState<User[]>([]); 
  const [selectedUser, setSelectedUser] = useState("");
  const dispatch=useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  // const {user}=useSelector((state)=>state)
  // console.log(user,"this comes in dropdown");

  // const filtered=user.users.filter((x)=>x.role!=="admin")
  // console.log(filtered,"this is filtered")

  // filter for dropdown
  const user = useSelector((state: any) => state.user);

// Filter for dropdown: only users who are NOT team leads and role is "user"
const teamMembers = user.users.filter(
  (u: any) => !u.isTeamLead && u.role === "user"
);


// for showing list of team with their lead
 // Get only team leads
const teamLeads = user.users.filter(
  (u: any) => u.isTeamLead && u.teamName
);

// Optional: avoid duplicates based on teamName
const uniqueTeamLeads = Array.from(
  new Map(teamLeads.map(item => [item.teamName, item])).values()
);


  useEffect(() => {
    const stored = localStorage.getItem("signupUsers");
    if (stored) {
      const parsed: User[] = JSON.parse(stored); 
      const filtered = parsed.filter((u) => u.role === "user"); 
      setUserOptions(filtered); 
    }
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: yupResolver(schema),
  });



  const onSubmit = (data: formData) => {


    
    console.log(data);
    console.log(data.teamLead);
    console.log(user,"this is user")
    console.log(user.users,"this is user.users")
    const findLead=user.users.find((x)=>x.name==data.teamLead)
 
    // console.log(findLead,"this is findLead");
    dispatch(updateUser(data))


    // const signup=localStorage.getItem("signupUsers")||"[]"
    // const oldwala=JSON.parse(signup);
    // console.log("this is oldwala",oldwala)
    // const foundItem = oldwala.find(x => x.name == data.teamLead);
    // foundItem.isTeamLead=1;
    // foundItem.teamName=data.team;
    // localStorage.setItem("")

    // console.log("this is filterd",foundItem);
   

    const completeData = {
      ...data,
      user1: "",
      user2: "",
      user3: "",
      user4:""
    };
  
    // Save to localStorage
    // const teamStorage = localStorage.getItem("Team") || "[]";
    // const oldData = JSON.parse(teamStorage);
    // const newData = [...oldData, completeData];
  
    // localStorage.setItem("Team", JSON.stringify(newData));
    // console.log("Team data saved:", newData);
    
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
    {...register("teamLead")} 
    error={!!errors.teamLead}
  >
   {teamMembers.map((member: any, index: number) => (
    <MenuItem key={index} value={member.email}>
      {member.name} ({member.email})
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
      <Box mt={4}>
  <Typography variant="h5" gutterBottom>Teams and Leads</Typography>
  {uniqueTeamLeads.map((lead: any, index: number) => (
    <Box key={index} border="1px solid #ccc" borderRadius="8px" p={2} mb={2}>
      <Typography><strong>Team:</strong> {lead.teamName}</Typography>
      <Typography><strong>Lead:</strong> {lead.name}</Typography>
    </Box>
  ))}
</Box>
    </Box>
  );
};

export default Admin;















// import React, { useEffect, useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import TextField from "@mui/material/TextField";
// import { Select, MenuItem, FormControl, InputLabel, Typography as MuiTypography } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { addUser, updateUser } from '../redux/slice';

// interface User {
//   name: string;
//   role: string;
// }

// const schema = yup.object().shape({
//   team: yup.string().required("Team Name is required"),
//   teamLead: yup.string().required("Team Lead is required"),
// });

// interface formData {
//   team: string;
//   teamLead: string;
// }

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: 'white',
//   color: 'black',
//   padding: 4,
//   borderRadius: 2,
//   width: 300,
// };

// const Admin = () => {
//   const [open, setOpen] = useState(false);
//   const dispatch = useDispatch();

//   const { user } = useSelector((state) => state);
//   const filtered = user.users.filter((x) => x.role !== "admin");

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const { register, handleSubmit, formState: { errors } } = useForm<formData>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data: formData) => {
//     dispatch(updateUser(data));
//     handleClose();
//   };

//   return (
//     <Box>
//       {/* AppBar */}
//       <AppBar position="static">
//         <Toolbar variant="dense">
//           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit" component="div">
//             Admin Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Welcome message */}
//       <Box p={2}>
//         <Typography variant="h5">
//           Welcome Admin, {sessionStorage.getItem("Login")}
//         </Typography>

//         {/* Open Modal Button */}
//         <Button onClick={handleOpen} sx={{ mt: 2 }} variant="contained">Create New Team</Button>

//         {/* Modal Form */}
//         <Modal open={open} onClose={handleClose}>
//           <Box sx={style}>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <FormControl fullWidth margin="normal">
//                 <InputLabel id="team-select-label">Select Team Lead</InputLabel>
//                 <Select
//                   labelId="team-select-label"
//                   label="Select Team Lead"
//                   defaultValue=""
//                   {...register("teamLead")}
//                   error={!!errors.teamLead}
//                 >
//                   {filtered.map((user, index) => (
//                     <MenuItem key={index} value={user.name}>
//                       {user.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 {errors.teamLead && (
//                   <MuiTypography variant="caption" color="error">
//                     {errors.teamLead.message}
//                   </MuiTypography>
//                 )}
//               </FormControl>

//               <TextField
//                 label="Team Name"
//                 fullWidth
//                 margin="normal"
//                 {...register("team")}
//                 error={!!errors.team}
//                 helperText={errors.team?.message}
//               />

//               <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//                 Submit
//               </Button>
//             </form>
//           </Box>
//         </Modal>

//         {/* Display Created Teams */}
//         <Box mt={4}>
//           <Typography variant="h6">Team List</Typography>
//           {user.teams.length === 0 ? (
//             <Typography>No teams created yet.</Typography>
//           ) : (
//             user.teams.map((team, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   border: '1px solid gray',
//                   p: 2,
//                   mt: 2,
//                   borderRadius: 2,
//                   backgroundColor: '#f9f9f9',
//                 }}
//               >
//                 <Typography><strong>Team Name:</strong> {team.team}</Typography>
//                 <Typography><strong>Team Lead:</strong> {team.teamLead}</Typography>
//               </Box>
//             ))
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Admin;


