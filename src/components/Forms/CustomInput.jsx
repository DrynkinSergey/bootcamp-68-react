import { useId } from 'react'

const CustomInput = () => {
	const id = useId()
	return (
		<div className='label'>
			<label htmlFor={id}>Item</label>
			<input id={id} type='text' />
		</div>
	)
}

export default CustomInput
