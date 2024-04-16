import { useGetTodosQuery } from '../../redux/rtkQuery/todosApi'
import { TodoItem } from './TodoItem'
import s from './TodoList.module.css'

const ItemsList = () => {
	const { data, isLoading } = useGetTodosQuery()
	if (isLoading) {
		return <h1>Loading...</h1>
	}

	return (
		<ul className={s.list}>
			{data?.map(item => (
				<TodoItem key={item.id} {...item} />
			))}
		</ul>
	)
}

export default ItemsList
