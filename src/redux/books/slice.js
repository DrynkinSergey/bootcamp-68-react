import booksData from '../../assets/books.json'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	books: booksData,
}

const slice = createSlice({
	name: 'books',
	initialState,
	selectors: {
		selectBooks: state => state.books,
	},
	reducers: {
		addNewBook: (state, { payload }) => {
			state.books.push(payload)
		},
		deleteBook: (state, { payload }) => {
			state.books = state.books.filter(item => item.id !== payload)
		},
		toggleLike: (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload)
			item.liked = !item.liked
		},
	},
})

export const booksReducer = slice.reducer
export const { addNewBook, deleteBook, toggleLike } = slice.actions
export const { selectBooks } = slice.selectors
