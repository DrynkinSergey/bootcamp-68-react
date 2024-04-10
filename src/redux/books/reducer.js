import booksData from '../../assets/books.json'
import { ADD_BOOK, CHANGE_SEARCH_STR, DELETE_BOOK } from './constants'
const initialState = {
	books: booksData,
	filter: '',
}

export const booksReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_BOOK:
			return {
				...state,
				books: state.books.filter(item => item.id !== action.payload),
			}
		case ADD_BOOK:
			return {
				...state,
				books: [action.payload, ...state.books],
			}
		case CHANGE_SEARCH_STR:
			return {
				...state,
				filter: action.payload,
			}
		default:
			return state
	}
}
