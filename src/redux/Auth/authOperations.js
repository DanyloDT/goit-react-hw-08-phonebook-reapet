import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUser,
  login,
  logout,
  setToken,
  signup,
} from '../../Config/connection-api';

export const signupThunk = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signup(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await login(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logout();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  'auth/currentUser',
  async (_, { rejectWithValue, getState }) => {
    const persistedToken = getState().auth.token;
    if (!persistedToken) {
      return rejectWithValue('Token is not found!');
    }
    try {
      setToken(persistedToken);
      const data = await currentUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
