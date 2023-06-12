import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://64844730ee799e3216267603.mockapi.io';

export const fetchContacts = createAsyncThunk('fetchContacts', async (_, thunk) => {
    try {
        const responce = await axios('/contacts');
        return responce.data;
        
    } catch (error) {
        return thunk.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunk) => {
    try {
        const responce = await axios.post('/contacts', newContact);
        return responce.data;
    } catch (error) {
        return thunk.rejectWithValue(error.message);
    }
});


export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunk) => {
    try {
        const responce = await axios.delete(`/contacts/${id}`);
        return responce.data;
    } catch (error) {
        return thunk.rejectWithValue(error.message);
    }
});