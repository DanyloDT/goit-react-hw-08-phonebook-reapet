import { createSelector } from '@reduxjs/toolkit';

// export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRegistered = (state) => state.auth.isRegistered;
export const selectRefresh = (state) => state.auth.isRefreshing;

export const selectUser = createSelector(
  [(state) => state.auth.user],
  (user) => user
);
