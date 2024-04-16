import { createSelector } from '@reduxjs/toolkit'
import { selectTodos } from './slice'
import { selectFilter } from '../filterSlice'

export const selectFilteredData = state => {
	const todos = selectTodos(state)
	const filter = selectFilter(state)
	console.log('FIlter is done!')
	switch (filter) {
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			return todos
	}
}

export const selectFilteredDataMemo = createSelector([selectTodos, selectFilter], (todos, filter) => {
	switch (filter) {
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			return todos
	}
})

export const selectUncompletedTodosMemo = createSelector([selectTodos], todos => {
	console.log('calculate is done!')
	return todos.reduce((total, item) => (!item.completed ? total + 1 : total), 0)
})

export const selectUncompletedTodos = state => {
	const todos = selectTodos(state)
	console.log('calculate is done!')

	return todos.reduce((total, item) => (!item.completed ? total + 1 : total), 0)
}
