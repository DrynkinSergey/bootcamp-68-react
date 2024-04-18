import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todolist/slice'
import { booksReducer } from './books/slice'
import { filterReducer } from './filterSlice'
import { authReducer } from './auth/slice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { notesReducer } from './notes/slice'

const persistConfig = {
	key: 'auth',
	version: 1,
	storage,
	whitelist: ['token'],
}

export const store = configureStore({
	reducer: {
		todolist: todosReducer,
		books: booksReducer,
		filter: filterReducer,
		auth: persistReducer(persistConfig, authReducer),
		notes: notesReducer,
		// [todoApi.reducerPath]: todoApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
