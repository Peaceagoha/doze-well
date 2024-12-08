import { atom } from "nanostores";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user";

export const $bg = atom("sound-player-bg");

export default configureStore({
  reducer: {
    users: usersReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: ["users/setUser"],
  //       ignoredPaths: ["users.user"],
  //     },
  //     immutableCheck: false,
  //   }),
});
