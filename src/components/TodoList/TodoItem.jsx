import s from './TodoList.module.css'
export const TodoItem = ({ id, completed, todo, handleDeleteTodo, handleToggleTodo }) => {
	return (
		<li className={s.item}>
			<input checked={completed} type='checkbox' onChange={() => handleToggleTodo(id)} />
			<span>{todo}</span>
			<button onClick={() => handleDeleteTodo(id)} className='btn border' size='18px'>
				Delete
			</button>
		</li>
	)
}
