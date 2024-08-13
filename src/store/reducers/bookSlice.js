import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWithoutToken } from "../../services/get";
import path from "../../config/paths";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await getWithoutToken(path.getBooks);
  console.log("response ==> ", response.data);
  return response.data.data;
});

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;