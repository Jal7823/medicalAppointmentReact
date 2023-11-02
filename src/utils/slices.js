import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: "",
  username: "",
  token: "",
  dni:'',
  last_name:'',
  name:''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.dni = action.payload.dni;
      state.last_name = action.payload.last_name;
      state.name = action.payload.name;
    },
    unsetUser: (state) => {
      state.email = "";
      state.username = "";
      state.token = "";
      state.dni='',
      state.last_name='',
      state.name=''
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;