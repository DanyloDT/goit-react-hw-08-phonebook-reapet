import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.filter.filter;
export const selectLoading = (state) => state.contacts.isLoading;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase().trim())
    )
);
