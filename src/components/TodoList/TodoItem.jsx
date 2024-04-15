import { useDispatch } from 'react-redux'
import s from './TodoList.module.css'
import { updateStatusThunk, updateTitleThunk } from '../../redux/todolist/operations'
export const TodoItem = ({ id, completed, todo, handleDeleteTodo }) => {
	const dispatch = useDispatch()

	return (
		<li className={s.item}>
			<input
				checked={completed}
				type='checkbox'
				onChange={() => dispatch(updateStatusThunk({ id, completed, todo }))}
			/>
			<span onClick={() => dispatch(updateTitleThunk({ id, completed, todo }))}>{todo}</span>

			<button onClick={() => handleDeleteTodo(id)} className='btn border' size='18px'>
				Delete
			</button>
		</li>
	)
}
