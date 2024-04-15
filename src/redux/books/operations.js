import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBooksThunk = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
	try {
		const { data } = await axios.get('books')
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addBookThunk = createAsyncThunk('books/addBook', async (book, thunkAPI) => {
	try {
		const { data } = await axios.post('books', book)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteBookThunk = createAsyncThunk('books/deleteBook', async (id, thunkAPI) => {
	try {
		const { data } = await axios.delete(`books/${id}`)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const toggleLikeThunk = createAsyncThunk('books/toggleLike', async (book, thunkAPI) => {
	try {
		const { data } = await axios.put(`books/${book.id}`, { ...book, liked: !book.liked })
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
