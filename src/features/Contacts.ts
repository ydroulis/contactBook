import { createSlice } from "@reduxjs/toolkit";

import { Contacts } from '../FakeData';


export const contactSlice = createSlice({
    name: "contacts",
    initialState: { list: Contacts, id: null },
    reducers: {
        addContact: (state, action) => {
            state.list.push(action.payload);
        },
        setContactId: (state, action) => {
            state.id = action.payload;
        },
        deleteContact: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload.id)
        },
        updateContact: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload.id)
            state.list.push(action.payload.newContact);
        }
    }
})

export const { addContact, setContactId, deleteContact, updateContact } = contactSlice.actions
export default contactSlice.reducer;