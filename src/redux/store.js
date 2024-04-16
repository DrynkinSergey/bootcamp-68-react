import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todolist/slice'
import { booksReducer } from './books/slice'
import { filterReducer } from './filterSlice'

export const store = configureStore({
	reducer: {
		todolist: todosReducer,
		books: booksReducer,
		filter: filterReducer,
	},
})
