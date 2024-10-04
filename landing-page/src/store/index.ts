import { configureStore } from "@reduxjs/toolkit";
import submitFormReducer from "../features/contactUs/submitFormSlice";

export const store = configureStore({
  reducer: {
    submitForm: submitFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
