import { counterReducer } from './counter/reducer'
import { todosReducer } from './todolist/reducer'
import { booksReducer } from './books/reducer'
import { configureStore } from '@reduxjs/toolkit'

// Створюємо стор та передаємо обов'язково reducer.
// Якщо використовуємо в проекті 1 редьюсер, передаємо як один
// Якщо декілька - то у вигляді об'єкта
export const store = configureStore({
	reducer: {
		todos: todosReducer,
		counter: counterReducer,
		books: booksReducer,
	},
})
