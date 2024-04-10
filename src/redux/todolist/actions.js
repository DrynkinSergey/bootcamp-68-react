import { nanoid } from 'nanoid'
import { ADD_TODO, CHANGE_FILTER, DELETE_ALL, DELETE_SELECTED, DELETE_TODO, TOGGLE_TODO } from './constants'

export const addNewTodo = title => {
	const newObj = { id: nanoid(), todo: title, completed: false }
	return { type: ADD_TODO, payload: newObj }
}

export const deleteTodo = id => ({ type: DELETE_TODO, payload: id })
export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id })
export const deleteAll = () => ({ type: DELETE_ALL })
export const deleteSelected = () => ({ type: DELETE_SELECTED })

export const changeFIlter = filterValue => ({ type: CHANGE_FILTER, payload: filterValue })
