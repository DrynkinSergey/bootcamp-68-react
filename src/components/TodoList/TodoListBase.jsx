import { useEffect } from 'react'
import s from './TodoList.module.css'
import Filter from './Filter'
import AddForm from './AddForm'
import ItemsList from './ItemsList'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsLoading, selectMemoData } from '../../redux/todolist/slice'
import { deleteTodoThunk, fetchData } from '../../redux/todolist/operations'
import { selectFilteredDataMemo } from '../../redux/todolist/selectors'

export const TodoListBase = () => {
	const todos = useSelector(selectFilteredDataMemo)
	const uncompleted = useSelector(selectMemoData)
	const isLoading = useSelector(selectIsLoading)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchData())
	}, [dispatch])

	const handleDeleteTodo = id => {
		dispatch(deleteTodoThunk(id))
	}

	return (
		<section className={s.wrapper}>
			<AddForm />
			<Filter />
			{isLoading && <p>Loading...</p>}
			<h1>Uncompleted tasks: {uncompleted}</h1>

			<ItemsList data={todos} handleDeleteTodo={handleDeleteTodo} />
		</section>
	)
}
