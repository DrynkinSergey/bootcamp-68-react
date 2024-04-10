import { useEffect, useState } from 'react'
import s from './TodoList.module.css'

import Filter from './Filter'
import AddForm from './AddForm'
import ItemsList from './ItemsList'
import OptionsBtns from './OptionsBtns'
export const TodoList = () => {
	const [todos, setTodos] = useState(() => {
		const savedData = JSON.parse(window.localStorage.getItem('todo-data'))
		if (savedData?.length) {
			return savedData
		}
		return []
	})
	const [filterValue, setFilterValue] = useState('all')

	useEffect(() => {
		window.localStorage.setItem('todo-data', JSON.stringify(todos))
	}, [todos])

	const handleDeleteSelected = () => {}

	const handleToggleTodo = id => {}

	const handleDeleteTodo = id => {}

	const handleDeleteAll = () => {}

	const getFilteredData = () => {
		switch (filterValue) {
			case 'active':
				return todos.filter(item => !item.completed)
			case 'completed':
				return todos.filter(item => item.completed)
			default:
				return todos
		}
	}
	const addTodo = data => {}

	const filteredData = getFilteredData()
	return (
		<section className={s.wrapper}>
			<AddForm addTodo={addTodo} />
			<Filter filterValue={filterValue} setFilterValue={setFilterValue} />
			<ItemsList data={filteredData} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
			<OptionsBtns handleDeleteAll={handleDeleteAll} handleDeleteSelected={handleDeleteSelected} />
		</section>
	)
}
