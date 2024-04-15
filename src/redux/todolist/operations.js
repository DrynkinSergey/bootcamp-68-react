import axios from 'axios'
import { addNewTodo, dataFetched, deleteTodo, isError, isLoading, toggleTodo, updateTitle } from './slice'

axios.defaults.baseURL = 'https://661ccf58e7b95ad7fa6b33a5.mockapi.io/'

export const fetchData = () => async dispatch => {
	try {
		// request
		dispatch(isLoading(true))
		const { data } = await axios.get(`todos`)
		dispatch(dataFetched(data))
	} catch (error) {
		dispatch(isError(true))
	} finally {
		dispatch(isLoading(false))
	}
}

export const deleteTodoThunk = id => async dispatch => {
	try {
		dispatch(isLoading(true))
		await axios.delete(`todos/${id}`)
		dispatch(deleteTodo(id))
	} catch (error) {
		dispatch(isError(true))
	} finally {
		dispatch(isLoading(false))
	}
}

export const addTodoThunk = todo => async dispatch => {
	try {
		dispatch(isLoading(true))
		const { data } = await axios.post(`todos`, todo)
		dispatch(addNewTodo(data))
	} catch (err) {
		dispatch(isError(true))
	}
}

export const updateStatusThunk = todo => async dispatch => {
	try {
		dispatch(isLoading(true))
		const { data } = await axios.put(`todos/${todo.id}`, { ...todo, completed: !todo.completed })
		dispatch(toggleTodo(data.id))
	} catch (error) {
		dispatch(isError(true))
	}
}

export const updateTitleThunk = todo => async dispatch => {
	try {
		dispatch(isLoading(true))
		const { data } = await axios.put(`todos/${todo.id}`, { ...todo, todo: prompt('Enter new title') })
		dispatch(updateTitle(data))
	} catch (error) {
		dispatch(isError(true))
	}
}
