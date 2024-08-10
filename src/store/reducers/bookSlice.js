import { createSlice, asyncThunkCreator } from "@reduxjs/toolkit";
import { getWithoutToken } from "../../services/get";
import path from "../../config/paths";

const fetchBooks = asyncThunkCreator("books/fetchBooks", async () => {
  const response = await getWithoutToken(path.getBooks);
  return response.data;
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