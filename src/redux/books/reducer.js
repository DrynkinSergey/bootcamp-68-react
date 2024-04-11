import booksData from '../../assets/books.json'
import { addNewBook, changeSearchStr, deleteBook, toggleLike } from './actions'
import { createReducer } from '@reduxjs/toolkit'
const initialState = {
	books: booksData,
	filter: '',
}

export const booksReducer = createReducer(initialState, builder => {
	builder
		.addCase(deleteBook, (state, { payload }) => {
			state.books = state.books.filter(item => item.id !== payload)
		})
		.addCase(addNewBook, (state, { payload }) => {
			state.books.push(payload)
		})
		.addCase(changeSearchStr, (state, { payload }) => {
			state.filter = payload
		})
		.addCase(toggleLike, (state, { payload }) => {
			const item = state.books.find(item => item.id === payload)
			item.liked = !item.liked
		})
})

// export const booksReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case DELETE_BOOK:
// 			return {
// 				...state,
// 				books: state.books.filter(item => item.id !== action.payload),
// 			}
// 		case ADD_BOOK:
// 			return {
// 				...state,
// 				books: [action.payload, ...state.books],
// 			}
// 		case CHANGE_SEARCH_STR:
// 			return {
// 				...state,
// 				filter: action.payload,
// 			}
// 		case TOGGLE_LIKE:
// 			return {
// 				...state,
// 				books: state.books.map(item => (item.id === action.payload ? { ...item, liked: !item.liked } : item)),
// 			}
// 		default:
// 			return state
// 	}
// }
