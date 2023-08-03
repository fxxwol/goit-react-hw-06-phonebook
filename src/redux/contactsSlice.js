import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {contacts: []},
    reducers: {
        add({contacts}, { payload: { name, number } }) {
           contacts.push({
                id: nanoid(),
                name: name,
                number: number,
            })
        },
        remove({ contacts }, {payload: {id}}) {
            return { contacts: contacts.filter(contact => contact.id !== id) }
            
        }
    }
})

const persistConfig = {
    key: 'contacts',
    storage
}

export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const { add, remove } = contactsSlice.actions;