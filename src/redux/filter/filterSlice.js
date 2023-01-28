import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterContact(state, { payload }) {
      return payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
