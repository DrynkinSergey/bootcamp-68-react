import { tagsReducer } from './tagsSlice'
import { topicReducer } from './topicSlice'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './authSlice'

const persistConfig = {
	key: 'topics',
	version: 1,
	storage,
}
const authConfig = {
	key: 'auth',
	version: 1,
	storage,
}

export const store = configureStore({
	reducer: {
		topic: persistReducer(persistConfig, topicReducer),
		tags: tagsReducer,
		auth: persistReducer(authConfig, authReducer),
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
