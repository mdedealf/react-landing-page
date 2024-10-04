import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type SubmittedData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface SubmittedDataState {
  lists: SubmittedData[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: SubmittedDataState = {
  lists: [],
  status: "idle",
  error: null,
};

export const submitForm = createAsyncThunk(
  "contactUsData/submitForm",
  async (contactData: SubmittedData, { rejectWithValue }) => {
    try {
      const { status } = await axios.post(
        "http://localhost:3000/contact-me",
        contactData
      );

      if (status !== 201) throw new Error("Failed to send your message");

      // return submitted data and add to lists
      return contactData;
    } catch (error: unknown) {
      // handle error as an instance of Error object
      if (error instanceof Error) return rejectWithValue(error.message);

      return rejectWithValue("Error while submitting your message");
    }
  }
);

const contactUsDataSlice = createSlice({
  name: "contactUsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.status = "succeeded";

        // add submitted form to lists
        state.lists.push(action.payload);
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default contactUsDataSlice.reducer;
