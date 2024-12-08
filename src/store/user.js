import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setUser: (users, action) => {
      users.currentUser = action.payload;
    },
    clearUser: (users) => {
      users.currentUser = null;
    },
  },
});

export const { setUser, clearUser } = usersSlice.actions;
export const selectUsers = (state) => state.users;
export default usersSlice.reducer;
