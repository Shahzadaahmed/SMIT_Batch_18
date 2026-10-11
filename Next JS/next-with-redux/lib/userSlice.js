// User reducer...!

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
    userStatus: false,
  },
  reducers: {},
});

export default userSlice.reducer;
