import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        add(state, { payload: { name, number } }) {
            if (state.find(contact => contact.name === name)) {
                alert(`${name} is already in your contacts`);
                return;
            }
           state.push({
                id: nanoid(),
                name: name,
                number: number,
            })
        },
        remove(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { add, remove } = contactsSlice.actions;