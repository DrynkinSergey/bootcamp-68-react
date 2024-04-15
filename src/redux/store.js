import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todolist/slice'
import { booksReducer } from './books/slice'
import { filterReducer } from './filterSlice'

export const store = configureStore({
	reducer: {
		todos: todosReducer,
		books: booksReducer,
		filter: filterReducer,
	},
})
