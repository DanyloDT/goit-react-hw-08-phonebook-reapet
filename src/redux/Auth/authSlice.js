import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  signupThunk,
} from './authOperations';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  error: '',
  isLoading: false,
  isRefreshing: false,
  isRegistered: false,
};

const pending = (state) => {
  state.isLoading = true;
  state.error = '';
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsRegistered: (state, { payload }) => {
      state.isRegistered = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = { name: '', email: '' };
        state.token = '';
        state.isLoggedIn = false;
      })

      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUserThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(currentUserThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(signupThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
          state.error = '';
        }
      )
      .addMatcher(
        isAnyOf(signupThunk.pending, loginThunk.pending, logoutThunk.pending),
        pending
      )
      .addMatcher(
        isAnyOf(
          signupThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected
        ),
        rejected
      );
  },
});

export const { setIsRegistered } = authSlice.actions;

export const authReducer = authSlice.reducer;
