import { createAsyncThunk } from '@reduxjs/toolkit'
import { clearToken, goitApi, setToken } from '../../config/goitApi'

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
	try {
		const { data } = await goitApi.post('/users/signup', credentials)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
	try {
		const { data } = await goitApi.post('/users/login', credentials)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	try {
		await goitApi.post('users/logout')
		clearToken()
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
	const savedToken = thunkApi.getState().auth.token
	if (!savedToken) {
		return thunkApi.rejectWithValue('Unable to fetch user')
	}
	setToken(savedToken)
	try {
		const { data } = await goitApi.get('/users/me')
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
