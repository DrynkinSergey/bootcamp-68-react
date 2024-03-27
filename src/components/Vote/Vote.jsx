import { useState } from 'react'

const Vote = () => {
	const data = ['macos', 'windows', 'linux']
	const [state, setState] = useState({ macos: 0, windows: 0, linux: 0 })

	const handleVote = value => {
		// if (value === 'MacOs') {
		// 	setState(prev => ({ ...prev, macos: prev.macos + 1 }))
		// }
		// if (value === 'Windows') {
		// 	setState(prev => ({ ...prev, windows: prev.windows + 1 }))
		// }
		// if (value === 'Linux') {
		// 	setState(prev => ({ ...prev, linux: prev.linux + 1 }))
		// }

		switch (value) {
			case 'macos':
				setState(prev => ({ ...prev, macos: prev.macos + 1 }))
				break
			case 'windows':
				setState(prev => ({ ...prev, windows: prev.windows + 1 }))
				break
			case 'linux':
				setState(prev => ({ ...prev, linux: prev.linux + 1 }))
				break
			default:
				break
		}

		// setState(prev => ({ ...prev, [value]: prev[value] + 1 }))
	}

	const totalVotes = state.linux + state.windows + state.macos
	return (
		<div>
			<div>
				{data.map(btn => (
					<button onClick={() => handleVote(btn)} key={btn}>
						{btn}
					</button>
				))}
			</div>

			<div>
				<h2>MacOs: {state.macos}</h2>
				<h2>Windows: {state.windows}</h2>
				<h2>Linux: {state.linux}</h2>
				<h2>Total votes: {totalVotes}</h2>
			</div>
		</div>
	)
}

export default Vote
