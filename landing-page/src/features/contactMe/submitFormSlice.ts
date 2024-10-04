import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type SubmitFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Submit form action
interface SubmitFormDataState {
  lists: ContactMeData[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: SubmitFormDataState = {
  lists: [],
  status: "idle",
  error: null,
};

// Action : submit form data into API
export const submitForm = createAsyncThunk(
  "contactUs/submitForm",
  async (contactData: SubmitFormData, { rejectWithValue }) => {
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

// Action : get submitted form data from API
export const fetchSubmittedForm = createAsyncThunk(
  "contactUs/fetchSubmittedForm",
  async () => {
    const submittedData = await axios.get("http://localhost:3000/contact-me");
    console.log(submittedData);
    return submittedData.data as ContactMeData[];
  }
);

const contactUsDataSlice = createSlice({
  name: "contactUsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // handling post form data
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

    // handle fetch form data
    builder
      .addCase(fetchSubmittedForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubmittedForm.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lists = action.payload;
      })
      .addCase(fetchSubmittedForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default contactUsDataSlice.reducer;
