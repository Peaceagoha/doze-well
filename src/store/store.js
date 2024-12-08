import { atom } from "nanostores";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user";
import toastReducer from "./toast";

export const $bg = atom("sound-player-bg");

export default configureStore({
  reducer: {
    users: usersReducer,
    toast: toastReducer,
  },
});
