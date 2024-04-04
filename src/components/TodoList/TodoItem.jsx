import { useContext } from 'react'
import s from './TodoList.module.css'
import { UserContext } from '../../context/ContextProvider'
export const TodoItem = ({ id, completed, todo, handleDeleteTodo, handleToggleTodo }) => {
	const { user } = useContext(UserContext)
	return (
		<li className={s.item}>
			<input checked={completed} type='checkbox' onChange={() => handleToggleTodo(id)} />
			<span>{todo}</span>

			{user === 'Olena' && (
				<button onClick={() => handleDeleteTodo(id)} className='btn border' size='18px'>
					Delete
				</button>
			)}
		</li>
	)
}
