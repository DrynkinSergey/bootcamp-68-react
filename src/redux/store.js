import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/slice'
import { todosReducer } from './todolist/slice'
import { booksReducer } from './books/slice'
import { filterReducer } from './filterSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}
const persistConfigBooks = {
	key: 'books',
	version: 1,
	storage,
}

const persistedReducer = persistReducer(persistConfig, todosReducer)
const persistedBooks = persistReducer(persistConfigBooks, booksReducer)

// Створюємо стор та передаємо обов'язково reducer.
// Якщо використовуємо в проекті 1 редьюсер, передаємо як один
// Якщо декілька - то у вигляді об'єкта
export const store = configureStore({
	reducer: {
		todos: persistedReducer,
		counter: counterReducer,
		books: persistedBooks,
		filter: filterReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
