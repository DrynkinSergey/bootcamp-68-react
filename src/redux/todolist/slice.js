import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState = {
	todos: [],
	filter: 'all',
}

const slice = createSlice({
	name: 'todos',
	initialState,
	selectors: {
		selectTodos: state => state.todos,
		selectFilter: state => state.filter,
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
		addNewTodo: {
			prepare: title => {
				return {
					payload: {
						todo: title,
						id: nanoid(),
						completed: false,
					},
				}
			},
			reducer: (state, { payload }) => {
				state.todos.push(payload)
			},
		},
	},
})

export const todosReducer = slice.reducer
export const { addNewTodo, deleteAll, deleteSelected, deleteTodo, changeFilter, toggleTodo } = slice.actions
export const { selectFilter, selectTodos } = slice.selectors
