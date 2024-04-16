import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todolist/slice'
import { booksReducer } from './books/slice'
import { filterReducer } from './filterSlice'
import moment from 'moment'
import { toast } from 'react-toastify'

const myLogger = store => next => action => {
	// console.log(moment().format('YYYY-MM-DD HH:mm:ss'), action)
	// next(action)
	if (action.payload?.todo === 'Angular') {
		toast.warning('Don`t use Angular!')
	}
	if (action.payload === 'completed') {
		return toast.info('Completed tasks only for admin users!')
	}
	next(action)
}

export const store = configureStore({
	reducer: {
		todolist: todosReducer,
		books: booksReducer,
		filter: filterReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(myLogger),
})
