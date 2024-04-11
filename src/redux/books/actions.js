import { createAction } from '@reduxjs/toolkit'

// export const deleteBook = id => ({ type: DELETE_BOOK, payload: id })

// export const addNewBook = book => ({
// 	type: ADD_BOOK,
// 	payload: book,
// })

// export const changeSearchStr = str => ({
// 	type: CHANGE_SEARCH_STR,
// 	payload: str,
// })

// export const toggleLike = id => ({ type: TOGGLE_LIKE, payload: id })

export const deleteBook = createAction('deleteBook')
export const addNewBook = createAction('addBook')
export const changeSearchStr = createAction('changeSearchStr')
export const toggleLike = createAction('toggleLike')
