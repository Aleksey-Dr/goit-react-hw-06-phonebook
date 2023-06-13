import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filterSlice';

import contacts from '../data/contacts'

export const store = configureStore({
    reducer: {
        contacts: contacts,
        filter: filterReducer,
    },
});