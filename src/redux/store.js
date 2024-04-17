import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todolist/slice'
import { booksReducer } from './books/slice'
import { filterReducer } from './filterSlice'
import { authReducer } from './auth/slice'
// import { todoApi } from './rtkQuery/todosApi'

// https://goit-task-manager.herokuapp.com/
export const store = configureStore({
	reducer: {
		todolist: todosReducer,
		books: booksReducer,
		filter: filterReducer,
		auth: authReducer,
		// [todoApi.reducerPath]: todoApi.reducer,
	},
})
