import todos from './../../assets/todos.json'
import s from './TodoList.module.css'
export const TodoList = () => {
	return (
		<>
			<div className='flex'>
				<input className={s.input} type='text' />
				<button className='btn border'>Add</button>
			</div>
			<ul className={s.list}>
				{todos.map(item => (
					<li className={s.item} key={item.id}>
						<input type='checkbox' />
						<span>{item.todo}</span>
						<button className='btn border' size='18px'>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	)
}
