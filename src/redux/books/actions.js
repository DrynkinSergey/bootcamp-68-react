import { ADD_BOOK, CHANGE_SEARCH_STR, DELETE_BOOK, TOGGLE_LIKE } from './constants'

export const deleteBook = id => ({ type: DELETE_BOOK, payload: id })

export const addNewBook = book => ({
	type: ADD_BOOK,
	payload: book,
})

export const changeSearchStr = str => ({
	type: CHANGE_SEARCH_STR,
	payload: str,
})

export const toggleLike = id => ({ type: TOGGLE_LIKE, payload: id })
