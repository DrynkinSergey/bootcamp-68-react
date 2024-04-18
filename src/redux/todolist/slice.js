import { createSelector, createSlice, isAnyOf } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchData, updateStatusThunk, updateTitleThunk } from './operations'
import { logoutThunk } from '../auth/operations'
// state.todolist.todos
// state.todolist.filter
// state.todolist.isLoading
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
	name: 'todolist',
	initialState,
	selectors: {
		selectTodos: state => state.todos,
		selectIsError: state => state.isError,
		selectIsLoading: state => state.isLoading,
		selectMemoData: createSelector([state => state.todos], todos => {
			return todos.reduce((total, item) => (!item.completed ? total + 1 : total), 0)
		}),
	},
	reducers: {
		changeValue: (state, { payload }) => {
			state.filter = payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(logoutThunk.pending, state => {
				state.todos = []
			})
			.addCase(fetchData.fulfilled, (state, { payload }) => {
				state.todos = payload
			})

			.addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
				state.todos = state.todos.filter(item => item.id !== payload)
			})

			.addCase(addTodoThunk.fulfilled, (state, { payload }) => {
				state.todos.push(payload)
			})

			.addCase(updateStatusThunk.fulfilled, (state, { payload }) => {
				const item = state.todos.find(item => item.id === payload.id)
				item.completed = !item.completed
			})

			.addCase(updateTitleThunk.fulfilled, (state, { payload }) => {
				const item = state.todos.find(item => item.id === payload.id)
				item.todo = payload.todo
			})

			.addMatcher(
				isAnyOf(fetchData.pending, deleteTodoThunk.pending, addTodoThunk.pending, updateStatusThunk.pending),
				state => {
					state.isLoading = true
					state.isError = false
				}
			)
			.addMatcher(
				isAnyOf(
					fetchData.rejected,
					deleteTodoThunk.rejected,
					addTodoThunk.rejected,
					updateStatusThunk.rejected,
					updateTitleThunk.rejected
				),
				(state, { payload }) => {
					state.isLoading = false
					state.isError = payload
				}
			)
			.addMatcher(
				isAnyOf(
					fetchData.fulfilled,
					deleteTodoThunk.fulfilled,
					addTodoThunk.fulfilled,
					updateStatusThunk.fulfilled,
					updateTitleThunk.fulfilled
				),
				state => {
					state.isLoading = false
				}
			)
	},
})

export const todosReducer = slice.reducer
export const { changeValue } = slice.actions
export const { selectTodos, selectIsError, selectIsLoading, selectMemoData } = slice.selectors
