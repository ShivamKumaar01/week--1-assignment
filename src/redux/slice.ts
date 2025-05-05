import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users:[]
};

const addUserSlice = createSlice({
  name: 'addUser',
  initialState,
  reducers: {
    addUser: (state,action) => {
        console.log("hellow baby")
        console.log(action.payload)
      state?.users?.push(action.payload);
      console.log(state.users,"this is state")
    },
   
  },
});

export const { addUser } = addUserSlice.actions;
export default addUserSlice.reducer;