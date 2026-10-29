import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "./userAction";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser, (state, action) => {
      state.usersList.push(action.payload);
    });
  },
});

export default usersSlice.reducer;
