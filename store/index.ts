import {configureStore} from '@reduxjs/toolkit';
import categoriesReducer from './slices/categories';
import questionsReducer from './slices/questions';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
