import { useEffect, useState } from 'react'
import s from './TodoList.module.css'

import Filter from './Filter'
import AddForm from './AddForm'
import ItemsList from './ItemsList'
import OptionsBtns from './OptionsBtns'
import { useSelector, useDispatch } from 'react-redux'
import {
	addNewTodo,
	deleteAll,
	deleteSelected,
	deleteTodo,
	selectFilter,
	selectTodos,
	toggleTodo,
} from '../../redux/todolist/slice'

export const TodoList = () => {
	const todos = useSelector(selectTodos)
	const filter = useSelector(selectFilter)

	const dispatch = useDispatch()

	const handleDeleteSelected = () => {
		dispatch(deleteSelected())
	}

	const handleToggleTodo = id => {
		dispatch(toggleTodo(id))
	}

	const handleDeleteTodo = id => {
		dispatch(deleteTodo(id))
	}

	const handleDeleteAll = () => {
		dispatch(deleteAll())
	}

	const addTodo = data => {
		dispatch(addNewTodo(data))
	}

	const getFilteredData = () => {
		switch (filter) {
			case 'active':
				return todos.filter(item => !item.completed)
			case 'completed':
				return todos.filter(item => item.completed)
			default:
				return todos
		}
	}

	const filteredData = getFilteredData()
	return (
		<section className={s.wrapper}>
			<AddForm addTodo={addTodo} />
			<Filter />
			<ItemsList data={filteredData} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
			<OptionsBtns handleDeleteAll={handleDeleteAll} handleDeleteSelected={handleDeleteSelected} />
		</section>
	)
}
