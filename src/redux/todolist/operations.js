import { createAsyncThunk } from '@reduxjs/toolkit'
import { goitApi } from '../../config/goitApi'

export const fetchData = createAsyncThunk('todos/fetchTodos', async (limit, thunkAPI) => {
	try {
		const { data } = await goitApi.get(`tasks`)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteTodoThunk = createAsyncThunk('todos/deleteTodo', async (id, thunkAPI) => {
	try {
		const { data } = await goitApi.delete(`tasks/${id}`)
		return data.id
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addTodoThunk = createAsyncThunk('todos/addTodo', async (todo, thunkAPI) => {
	try {
		const { data } = await goitApi.post(`tasks`, todo)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const updateStatusThunk = createAsyncThunk('todos/toggleTodo', async (todo, thunkAPI) => {
	try {
		const { data } = await goitApi.put(`tasks/${todo.id}`, { ...todo, completed: !todo.completed })
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const updateTitleThunk = createAsyncThunk('tasks/updateTitle', async (todo, thunkAPI) => {
	try {
		const { data } = await goitApi.put(`tasks/${todo.id}`, { ...todo, todo: prompt('Enter new title') })
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

// export const fetchData = () => async dispatch => {
// 	try {
// 		// request
// 		dispatch(isLoading(true))
// 		const { data } = await axios.get(`todos`)
// 		dispatch(dataFetched(data))
// 	} catch (error) {
// 		dispatch(isError(true))
// 	} finally {
// 		dispatch(isLoading(false))
// 	}
// }

// export const deleteTodoThunk = id => async dispatch => {
// 	try {
// 		dispatch(isLoading(true))
// 		await axios.delete(`todos/${id}`)
// 		dispatch(deleteTodo(id))
// 	} catch (error) {
// 		dispatch(isError(true))
// 	} finally {
// 		dispatch(isLoading(false))
// 	}
// }

// export const addTodoThunk = todo => async dispatch => {
// 	try {
// 		dispatch(isLoading(true))
// 		const { data } = await axios.post(`todos`, todo)
// 		dispatch(addNewTodo(data))
// 	} catch (err) {
// 		dispatch(isError(true))
// 	}
// }

// export const updateStatusThunk = todo => async dispatch => {
// 	try {
// 		dispatch(isLoading(true))
// 		const { data } = await axios.put(`todos/${todo.id}`, { ...todo, completed: !todo.completed })
// 		dispatch(toggleTodo(data.id))
// 	} catch (error) {
// 		dispatch(isError(true))
// 	}
// }

// export const updateTitleThunk = todo => async dispatch => {
// 	try {
// 		dispatch(isLoading(true))
// 		const { data } = await axios.put(`todos/${todo.id}`, { ...todo, todo: prompt('Enter new title') })
// 		dispatch(updateTitle(data))
// 	} catch (error) {
// 		dispatch(isError(true))
// 	}
// }
