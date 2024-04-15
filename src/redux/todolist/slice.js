import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	todos: [],
	filter: 'all',
	isLoading: false,
	isError: false,
}
// CRUD
// C - create
// R - read
// U - update
// D - delete

const slice = createSlice({
	name: 'todos',
	initialState,
	selectors: {
		selectTodos: state => state.todos,
		selectFilter: state => state.filter,
		selectIsError: state => state.isError,
		selectIsLoading: state => state.isLoading,
	},
	reducers: {
		deleteTodo: (state, { payload }) => {
			state.todos = state.todos.filter(item => item.id !== payload)
		},
		toggleTodo: (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload)
			item.completed = !item.completed
		},
		deleteAll: state => {
			state.todos = []
		},
		deleteSelected: state => {
			state.todos = state.todos.filter(item => !item.completed)
		},
		changeFilter: (state, { payload }) => {
			state.filter = payload
		},
		addNewTodo: (state, { payload }) => {
			state.todos.push(payload)
		},
		isLoading: (state, { payload }) => {
			state.isLoading = payload
		},
		isError: (state, { payload }) => {
			state.isError = payload
		},
		dataFetched: (state, { payload }) => {
			state.todos = payload
		},
		updateTitle: (state, { payload }) => {
			const itemIndex = state.todos.findIndex(item => item.id === payload.id)
			state.todos[itemIndex].todo = payload.todo
		},
	},
})

export const todosReducer = slice.reducer
export const {
	addNewTodo,
	deleteAll,
	deleteSelected,
	deleteTodo,
	changeFilter,
	toggleTodo,
	isLoading,
	isError,
	dataFetched,
	updateTitle,
} = slice.actions
export const { selectFilter, selectTodos, selectIsError, selectIsLoading } = slice.selectors
