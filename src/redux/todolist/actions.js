import { createAction, nanoid } from '@reduxjs/toolkit'
import { ADD_TODO, CHANGE_FILTER, DELETE_ALL, DELETE_SELECTED, DELETE_TODO, TOGGLE_TODO } from './constants'

// export const addNewTodo = title => {
// 	const newObj = { id: nanoid(), todo: title, completed: false }
// 	return { type: ADD_TODO, payload: newObj }
// }

// export const deleteTodo = id => ({ type: DELETE_TODO, payload: id })
// export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id })
// export const deleteAll = () => ({ type: DELETE_ALL })
// export const deleteSelected = () => ({ type: DELETE_SELECTED })
// export const changeFilter = filterValue => ({ type: CHANGE_FILTER, payload: filterValue })


// Для генерації додаткових полів пейлоаді використовується prepare(2 аргумент у екшен креатора)
// Ми маємо повернути обов'язково пейлоад
export const addNewTodo = createAction('addTodo', title => {
	const newObj = { id: nanoid(), todo: title, completed: false }
	return { payload: newObj }
})
export const deleteTodo = createAction('deleteTodo')
export const toggleTodo = createAction('toggleTodo')
export const deleteAll = createAction('deleteAll')
export const deleteSelected = createAction('deleteSelected')
export const changeFilter = createAction('changeFilter')
