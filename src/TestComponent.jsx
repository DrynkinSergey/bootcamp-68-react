import React, { forwardRef } from 'react'

const TestComponent = forwardRef((props, ref) => {
	const handleClick = () => {
		console.log('Parent component was clicked by ref')
	}
	return (
		<div>
			<button ref={ref} onClick={handleClick}>
				Click me
			</button>
		</div>
	)
})

export default TestComponent
