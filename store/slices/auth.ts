import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  token: boolean;
}

const initialState: AuthState = {
  token: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {setToken} = authSlice.actions;

export default authSlice.reducer;
