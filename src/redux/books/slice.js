import booksData from '../../assets/books.json'
import { createSlice } from '@reduxjs/toolkit'
import { addBookThunk, deleteBookThunk, fetchBooksThunk, toggleLikeThunk } from './operations'

const initialState = {
	books: booksData,
}

const slice = createSlice({
	name: 'books',
	initialState,
	selectors: {
		selectBooks: state => state.books,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchBooksThunk.fulfilled, (state, { payload }) => {
				state.books = payload
			})
			.addCase(addBookThunk.fulfilled, (state, { payload }) => {
				state.books.push(payload)
			})
			.addCase(deleteBookThunk.fulfilled, (state, { payload }) => {
				state.books = state.books.filter(item => item.id !== payload.id)
			})
			.addCase(toggleLikeThunk.fulfilled, (state, { payload }) => {
				const item = state.books.find(item => item.id === payload.id)
				item.liked = !item.liked
			})
	},
})

export const booksReducer = slice.reducer
export const { selectBooks } = slice.selectors
