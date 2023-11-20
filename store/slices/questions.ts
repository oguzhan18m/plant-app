import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuestions: any = createAsyncThunk(
  'fetchQuestions',
  async () => {
    const {data} = await axios.get(
      `https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions`,
    );
    return data;
  },
);

export interface QuestionsState {
  questions: any[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: QuestionsState = {
  questions: [],
  isLoading: false,
  isError: false,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchQuestions.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.questions = action.payload;
    });
    builder.addCase(fetchQuestions.rejected, state => {
      state.isError = true;
    });
  },
});

export const {} = questionsSlice.actions;

export default questionsSlice.reducer;
