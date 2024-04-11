import { changeStep, decrement, increment, reset, selectCounter, selectStep } from '../../redux/counter/slice'
import s from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'
export const Counter = () => {
	const counter = useSelector(selectCounter)
	const step = useSelector(selectStep)

	const dispatch = useDispatch()

	const handleIncrement = () => {
		dispatch(increment())
	}
	const handleDecrement = () => {
		dispatch(decrement())
	}

	const handleReset = () => {
		dispatch(reset())
	}
	const handleChangeStep = e => {
		dispatch(changeStep(+e.target.value))
	}

	return (
		<div className={s.flexContainer}>
			<div className={s.wrapper}>
				<h1>{counter}</h1>
				<input value={step} onChange={handleChangeStep} />
				<div className={s.flex}>
					<button className='btn' onClick={handleDecrement}>
						minus
					</button>
					<button className='btn' onClick={handleReset}>
						reset
					</button>
					<button className='btn' onClick={handleIncrement}>
						plus
					</button>
				</div>
			</div>
		</div>
	)
}
