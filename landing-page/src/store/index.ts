import { configureStore } from "@reduxjs/toolkit";
import contactUsDataReducer from "../features/contactUs/contactUsSlicer";

export const store = configureStore({
  reducer: {
    contactUs: contactUsDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
