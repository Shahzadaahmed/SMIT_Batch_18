import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      users: usersReducer,
    },
  });
