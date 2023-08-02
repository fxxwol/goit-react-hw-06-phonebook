import { configureStore } from '@reduxjs/toolkit'
import { contactsSlice, persistedContactsReducer } from './contactsSlice'
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { filterSlice } from './filterSlice'

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)