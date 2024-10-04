import { configureStore } from "@reduxjs/toolkit";
import contactMeDataReducer from "../features/contactMe/submitFormSlice";

export const store = configureStore({
  reducer: {
    contactMe: contactMeDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
