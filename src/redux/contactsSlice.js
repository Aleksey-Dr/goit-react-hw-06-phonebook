import { createSlice } from '@reduxjs/toolkit';

import shortid from 'shortid';

import contacts from '../data/contacts'

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: contacts,
    },
    reducers: {
        addContact(state, action) {

            let includesName = false;
            contacts.map(contact => {
                contact.name === state.contacts.name && (includesName = true);
                return includesName;
            });

            includesName
                ? alert(state.contacts.name + ' is already in contacts')
                : state.contacts.push({
                    id: shortid.generate(),
                    name: action.payload.name,
                    number: action.payload.number,
                });
        },

        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact =>
                contact.id !== action.payload.id);
        },
    },
});

export const { addContact } = contactsSlice.actions;
export const { deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;