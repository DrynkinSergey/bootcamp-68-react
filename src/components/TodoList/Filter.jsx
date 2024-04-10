import clsx from 'clsx'
import s from './TodoList.module.css'
import { useDispatch } from 'react-redux'
import { changeFIlter } from '../../redux/todolist/actions'

const Filter = ({ filterValue }) => {
	const btns = ['all', 'active', 'completed']
	const dispatch = useDispatch()
	return (
		<div className={s.btnOptions}>
			{btns.map(btn => (
				<button
					onClick={() => dispatch(changeFIlter(btn))}
					key={btn}
					className={clsx('btn', 'border', filterValue === btn && 'activeBtn')}
				>
					{btn}
				</button>
			))}
		</div>
	)
}

export default Filter
