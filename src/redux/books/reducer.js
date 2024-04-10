import booksData from '../../assets/books.json'
import { ADD_BOOK, CHANGE_SEARCH_STR, DELETE_BOOK, TOGGLE_LIKE } from './constants'
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
		case TOGGLE_LIKE:
			return {
				...state,
				books: state.books.map(item => (item.id === action.payload ? { ...item, liked: !item.liked } : item)),
			}
		default:
			return state
	}
}
