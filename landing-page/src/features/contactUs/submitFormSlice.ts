import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type SubmittedFormData = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Submit form action
interface SubmitFormDataState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: SubmitFormDataState = {
  status: "idle",
  error: null,
};

export const submitForm = createAsyncThunk(
  "contactUs/submitForm",
  async (contactData: SubmittedFormData, { rejectWithValue }) => {
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

// get submitted form data action
export const fetchSubmittedForm = createAsyncThunk(
  "contactUs/fetchSubmittedForm",
  async () => {
    const submittedData = await axios.get("http://localhost:3000/contact-me");
    console.log(submittedData);
    return submittedData.data as SubmittedFormData[];
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
      .addCase(submitForm.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default contactUsDataSlice.reducer;
