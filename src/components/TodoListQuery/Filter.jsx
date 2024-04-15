import clsx from 'clsx'
import s from './TodoList.module.css'

const Filter = ({ filterValue }) => {
	const btns = ['all', 'active', 'completed']
	return (
		<div className={s.btnOptions}>
			{btns.map(btn => (
				<button key={btn} className={clsx('btn', 'border', filterValue === btn && 'activeBtn')}>
					{btn}
				</button>
			))}
		</div>
	)
}

export default Filter
