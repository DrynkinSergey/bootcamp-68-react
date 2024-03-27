import s from './Counter.module.css'

export const Counter = () => {
	const handleClick = e => {
		// alert('Hello')
		console.log(e)
		e.target.innerHTML = 'Hello'
	}

	const handleGreet = name => {
		console.log('Hello ', name)
	}

	return (
		<div className={s.flexContainer}>
			<div className={s.wrapper}>
				<h1>{0}</h1>
				<div className={s.flex}>
					<button className='btn' onClick={handleClick}>
						minus
					</button>
					<button className='btn' onClick={() => handleGreet('Petya')}>
						reset
					</button>
					<button className='btn' onClick={() => console.log('Plus clicked!')}>
						plus
					</button>
				</div>
			</div>
		</div>
	)
}
