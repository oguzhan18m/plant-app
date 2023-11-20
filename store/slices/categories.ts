import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories: any = createAsyncThunk(
  'fetchCategories',
  async () => {
    const {data} = await axios.get(
      `https://dummy-api-jtg6bessta-ey.a.run.app/getCategories`,
    );
    return data;
  },
);

export interface CategoriesState {
  categories: any[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  isError: false,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategories.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload?.data;
    });
    builder.addCase(fetchCategories.rejected, state => {
      state.isError = true;
    });
  },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
