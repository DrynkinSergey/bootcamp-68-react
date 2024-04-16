import { useState } from 'react'
import { useGetTodosQuery } from '../../redux/rtkQuery/todosApi'
import { TodoItem } from './TodoItem'
import s from './TodoList.module.css'

const ItemsList = () => {
	const [limit, setLimit] = useState(10)
	const { data, isLoading } = useGetTodosQuery(limit)
	if (isLoading) {
		return <h1>Loading...</h1>
	}

	return (
		<div>
			<select className='input' onChange={e => setLimit(e.target.value)}>
				<option value='10'>10</option>
				<option value='20'>20</option>
				<option value='30'>30</option>
			</select>
			<ul className={s.list}>
				{data?.todos.map(item => (
					<TodoItem key={item.id} {...item} />
				))}
			</ul>
		</div>
	)
}

export default ItemsList
