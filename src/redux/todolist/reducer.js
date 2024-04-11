import { addNewTodo, changeFilter, deleteAll, deleteSelected, deleteTodo, toggleTodo } from './actions'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
	todos: [],
	filter: 'all',
}

export const todosReducer = createReducer(initialState, builder => {
	builder
		.addCase(addNewTodo, (state, { payload }) => {
			state.todos.push(payload)
		})
		.addCase(deleteTodo, (state, { payload }) => {
			// state.todos = state.todos.filter(item => item.id !== payload)
			const itemIndex = state.todos.findIndex(item => item.id === payload)
			state.todos.splice(itemIndex, 1)
		})
		.addCase(toggleTodo, (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload)
			item.completed = !item.completed
		})
		.addCase(deleteAll, (state, { payload }) => {
			state.todos = []
		})
		.addCase(deleteSelected, (state, { payload }) => {
			state.todos = state.todos.filter(item => !item.completed)
		})
		.addCase(changeFilter, (state, { payload }) => {
			state.filter = payload
		})
})

// export const todosReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case addNewTodo.type: {
// 			return {
// 				...state,
// 				todos: [...state.todos, action.payload],
// 			}
// 		}
// 		case deleteTodo.type:
// 			return {
// 				...state,
// 				todos: state.todos.filter(item => item.id !== action.payload),
// 			}
// 		case toggleTodo.type:
// 			return {
// 				...state,
// 				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
// 			}
// 		case deleteAll.type:
// 			return {
// 				...state,
// 				todos: [],
// 			}
// 		case deleteSelected.type:
// 			return {
// 				...state,
// 				todos: state.todos.filter(item => !item.completed),
// 			}
// 		case changeFilter.type:
// 			return {
// 				...state,
// 				filter: action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
