import { useChangeNameMutation, useDeleteTodoMutation, useToggleTodoMutation } from '../../redux/rtkQuery/todosApi'
import s from './TodoList.module.css'
export const TodoItem = ({ id, completed, todo }) => {
	const [deleteTodo] = useDeleteTodoMutation()
	const [toggleTodo] = useToggleTodoMutation()
	const [changeName] = useChangeNameMutation()
	return (
		<li className={s.item}>
			<input checked={completed} type='checkbox' onChange={() => toggleTodo({ id, completed, todo })} />
			<span onClick={() => changeName({ id, completed, todo })}>{todo}</span>

			<button onClick={() => deleteTodo(id)} className='btn border' size='18px'>
				Delete
			</button>
		</li>
	)
}
