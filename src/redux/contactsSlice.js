import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { deleteContact } from "./operations";
import { addContact } from "./operations";

const handlePanding = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const contactsInitialState = { items: [], isLoading: false,  error: null};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePanding,
    [fetchContacts.fulfilled]: handleFulfilled,
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePanding,
    [addContact.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
      console.log(payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePanding,
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload.id);
      state.isLoading = false;
    },
    [deleteContact.rejected]: handleRejected,
  } 
});

export const contactsReducer = contactsSlice.reducer;