import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/slice'
import { todosReducer } from './todolist/slice'
import { booksReducer } from './books/slice'
import { filterReducer } from './filterSlice'

// Створюємо стор та передаємо обов'язково reducer.
// Якщо використовуємо в проекті 1 редьюсер, передаємо як один
// Якщо декілька - то у вигляді об'єкта
export const store = configureStore({
	reducer: {
		todos: todosReducer,
		counter: counterReducer,
		books: booksReducer,
		filter: filterReducer,
	},
})
