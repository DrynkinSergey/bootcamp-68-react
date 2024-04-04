import { useCallback, useEffect, useMemo, useState } from 'react'
import s from './Counter.module.css'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)

	// Виконається лише один раз. Незалежно від оновлень компонента
	useEffect(() => {
		console.log('Component was mount')
	}, [])

	// Виконається перший раз, а також всі наступні, коли оновиться лічильник (counter)
	useEffect(() => {
		if (counter === 0) return
		console.log('Update counter')

		if (counter < -5) {
			setCounter(0)
		}
	}, [counter])

	// Виконається перший раз, та всі наступні рази, коли буде змінено крок (step)
	useEffect(() => {
		if (step === 1) return
		console.log('Update step')
	}, [step])

	// Виконаєть кожен раз, коли оновлюється компонент
	// useEffect(() => {
	// 	console.log('RENDER')
	// })

	useEffect(() => {
		console.log('Було змінено крок або лічильник')
	}, [counter, step])

	const handleIncrement = () => {
		setCounter(prev => prev + step)
	}

	const handleDecrement = () => {
		setCounter(prev => prev - step)
	}

	const handleReset = () => {
		setCounter(0)
		setStep(1)
	}

	// getHardCalc -> 00xdr010x
	// getHardCalc -> 11x0r010
	// getHardCalc -> 0000r01d0
	// getHardCalc -> 0000r01d0
	// getHardCalc -> 0000r01d0
	// getHardCalc -> 0000r01d0
	// getHardCalc -> 0000r01d0
	// getHardCalc -> 0000r01d0
	// getHardCalc -> 0000r01d0
	// getHardCalc -> 0000r01d0

	const getHardCalc = useCallback(() => {
		console.log('Start calc')
		for (let i = 0; i <= 1_000_000_000; i++) {
			let a = 1
		}
		console.log('End calc')
		return step
	}, [step])

	const result = useMemo(() => getHardCalc(), [getHardCalc])

	return (
		<div className={s.flexContainer}>
			<div className={s.wrapper}>
				<h1>{counter}</h1>
				<h2>{result}</h2>
				<input value={step} onChange={e => setStep(+e.target.value)} />
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
