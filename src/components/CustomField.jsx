import { ErrorMessage, Field } from 'formik'
import { useState } from 'react'
import { FaEyeSlash, FaEye } from 'react-icons/fa'

const CustomField = ({ name, placeholder, type = 'text' }) => {
	const [showPassword, setShowPassword] = useState(false)
	return (
		<label className='label'>
			{name}
			<div className='inputWrapper'>
				<Field className='input' type={showPassword ? 'text' : type} name={name} placeholder={placeholder} />
				{type === 'password' && (
					<button className='iconBtn' type='button' onClick={() => setShowPassword(!showPassword)}>
						{!showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
					</button>
				)}
			</div>
			<ErrorMessage name={name} component={'p'} className='red' />
		</label>
	)
}

export default CustomField
