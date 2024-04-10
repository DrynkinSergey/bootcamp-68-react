import { TodoItem } from './TodoItem'
import s from './TodoList.module.css'

const ItemsList = ({ data, handleDeleteTodo, handleToggleTodo }) => {
	return (
		<ul className={s.list}>
			{data.map(item => (
				<TodoItem key={item.id} {...item} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
			))}
		</ul>
	)
}

export default ItemsList
