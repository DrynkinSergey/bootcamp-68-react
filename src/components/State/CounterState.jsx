import { useState } from 'react'

const CounterState = () => {
	const [clicks, setClicks] = useState(0)
	return (
		<div>
			<button onClick={() => setClicks(prev => prev + 1)}>{clicks}</button>
		</div>
	)
}

export default CounterState
