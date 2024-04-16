import { useEffect, useState } from 'react'
import s from './TodoList.module.css'

import Filter from './Filter'
import AddForm from './AddForm'
import ItemsList from './ItemsList'
import { useSelector, useDispatch } from 'react-redux'
import { changeValue, selectIsLoading, selectMemoData } from '../../redux/todolist/slice'
import { deleteTodoThunk, fetchData } from '../../redux/todolist/operations'
import {
	selectFilteredData,
	selectFilteredDataMemo,
	selectUncompletedTodos,
	selectUncompletedTodosMemo,
} from '../../redux/todolist/selectors'

export const TodoListBase = () => {
	const todos = useSelector(selectFilteredDataMemo)
	const uncompleted = useSelector(selectMemoData)
	const isLoading = useSelector(selectIsLoading)
	const dispatch = useDispatch()
	const [limit, setLimit] = useState(10)

	useEffect(() => {
		dispatch(fetchData(limit))
	}, [dispatch, limit])

	const handleDeleteTodo = id => {
		dispatch(deleteTodoThunk(id))
	}

	return (
		<section className={s.wrapper}>
			<AddForm />
			<Filter />
			{isLoading && <p>Loading...</p>}
			<h1>Uncompleted tasks: {uncompleted}</h1>
			<input className='input' onChange={e => dispatch(changeValue(e.target.value))} />
			<select className='input' onChange={e => setLimit(e.target.value)}>
				<option value='10'>10</option>
				<option value='20'>20</option>
				<option value='30'>30</option>
			</select>
			<ItemsList data={todos} handleDeleteTodo={handleDeleteTodo} />
		</section>
	)
}
