import React from 'react'
import CustomInput from './CustomInput'

const FormIdLabels = ({ countOfFields }) => {
	return (
		<form className='form'>
			{Array(countOfFields)
				.fill('')
				.map((_, idx) => (
					<CustomInput key={idx} />
				))}
		</form>
	)
}

export default FormIdLabels
