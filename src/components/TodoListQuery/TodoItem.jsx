import s from './TodoList.module.css'
export const TodoItem = ({ id, completed, todo }) => {
	return (
		<li className={s.item}>
			<input checked={completed} type='checkbox' />
			<span>{todo}</span>

			<button className='btn border' size='18px'>
				Delete
			</button>
		</li>
	)
}
