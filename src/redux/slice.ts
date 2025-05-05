// import { createSlice, current } from '@reduxjs/toolkit';

// const initialState = {
//   users:[]
// };

// const addUserSlice = createSlice({
//   name: 'addUser',
//   initialState,
//   reducers: {
//     addUser: (state,action) => {
//         console.log("hellow baby")
//         console.log(action.payload)
//       state?.users?.push(action.payload);
//       console.log(state.users,"this is state")
//     },
//     // updateUser:(state,action)=>{
//     //   const { team, teamLead } = action.payload;
//     //   // console.log(current(state.users),"this is state in slice")
//     //   const datas=current(state.users)
//     //   const updata=datas.find((data)=>data.name==teamLead);
//     //   // console.log(updata?.index)
//     //   updata.isTeamLead=1;
//     //   updata.teamName=team;
//     //   console.log(updata,"this is finder");
//     //   console.log(current(state.users))


      
//     //   const finder = state.users.find((user) => user.name==action.payload.teamLead);
//     //   console.log(finder,"this is find here you can update and add in store")
//     // }

//     updateUser: (state, action) => {
//       const { team, teamLead } = action.payload;
    
//       const userIndex = state.users.findIndex(user => user.name === teamLead);
//       if (userIndex !== -1) {
//         state.users[userIndex].isTeamLead = 1;
//         state.users[userIndex].teamName = team;
//       }
//     }
   
//   },
// });

// export const { addUser,updateUser } = addUserSlice.actions;
// export default addUserSlice.reducer;




import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  teams: [], // ✅ New addition to store team details
};

const addUserSlice = createSlice({
  name: 'addUser',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("hellow baby");
      console.log(action.payload);
      state?.users?.push(action.payload);
      console.log(state.users, "this is state");
    },
    
    updateUser: (state, action) => {
      const { team, teamLead } = action.payload;

      // ✅ Update user if they become a team lead
      const userIndex = state.users.findIndex(user => user.name === teamLead);
      if (userIndex !== -1) {
        state.users[userIndex].isTeamLead = 1;
        state.users[userIndex].teamName = team;
      }

      // ✅ Push team data into teams array
      // state.teams.push({ team, teamLead });
      state.teams.push(action.payload);
    }
  },
});

export const { addUser, updateUser } = addUserSlice.actions;
export default addUserSlice.reducer;
