import { TodoItem } from './TodoItem'
import s from './TodoList.module.css'

const ItemsList = ({ data }) => {
	return (
		<ul className={s.list}>
			{data.map(item => (
				<TodoItem key={item.id} {...item} />
			))}
		</ul>
	)
}

export default ItemsList
