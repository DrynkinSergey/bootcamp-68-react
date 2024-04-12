import { tagsReducer } from './tagsSlice'
import { topicReducer } from './topicSlice'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'topics',
	version: 1,
	storage,
}

const persistedReducer = persistReducer(persistConfig, topicReducer)
export const store = configureStore({
	reducer: {
		topic: persistedReducer,
		tags: tagsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
