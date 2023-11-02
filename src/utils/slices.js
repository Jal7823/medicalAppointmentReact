import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: "",
  username: "",
  token: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    unsetUser: (state) => {
      state.email = "";
      state.username = "";
      state.token = "";
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;