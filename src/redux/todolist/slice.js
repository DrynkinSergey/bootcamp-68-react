import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchData, updateStatusThunk, updateTitleThunk } from './operations'
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
		changeFilter: (state, { payload }) => {
			state.filter = payload
		},
	},
	extraReducers: builder => {
		builder
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
export const { changeFilter } = slice.actions
export const { selectFilter, selectTodos, selectIsError, selectIsLoading } = slice.selectors
