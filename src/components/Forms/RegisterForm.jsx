import { useState } from 'react'

const RegisterForm = ({ onRegister }) => {
	const [formState, setFormState] = useState({ username: '' })

	const handleSubmit = e => {
		e.preventDefault()
		onRegister(formState)
	}

	// DRY
	// const handleChangeName = e => {
	// 	setFormState(prev => ({ ...prev, username: e.target.value }))
	// }
	// const handleChangeEmail = e => {
	// 	setFormState(prev => ({ ...prev, email: e.target.value }))
	// }
	// const handleChangePassword = e => {
	// 	setFormState(prev => ({ ...prev, password: e.target.value }))
	// }

	const handleChangeInput = e => {
		// Деструктуризація імені поля та значення. Щоб не писати довгі конструкції
		const { name, value } = e.target
		// switch (name) {
		// 	case 'username':
		// 		setFormState(prev => ({ ...prev, username: value }))
		// 		break
		// 	case 'email':
		// 		setFormState(prev => ({ ...prev, email: value }))
		// 		break
		// 	case 'password':
		// 		setFormState(prev => ({ ...prev, password: value }))
		// 		break
		// 	default:
		// 		break
		// }

		console.log(name, value)

		setFormState(prev => ({ ...prev, [name]: value }))
	}

	return (
		<form onSubmit={handleSubmit} className='form'>
			<label className='label'>
				Username
				<input value={formState.username} onChange={handleChangeInput} className='input' type='text' name='username' />
			</label>
			<label className='label'>
				Email
				<input value={formState.email} onChange={handleChangeInput} className='input' type='email' name='email' />
			</label>
			<label className='label'>
				Password
				<input
					value={formState.password}
					onChange={handleChangeInput}
					className='input'
					type='password'
					name='password'
				/>
			</label>

			<label className='label'>
				Country
				<select className='input' value={formState.country} onChange={handleChangeInput} name='country'>
					<option value='ukraine'>Ukraine</option>
					<option value='usa'>USA</option>
					<option value='canada'>Canada</option>
				</select>
			</label>

			<label className='label'>
				Age
				<input type='number' className='input' value={formState.age} onChange={handleChangeInput} name='age' />
			</label>

			<button className='btn border'>Register</button>
		</form>
	)
}

export default RegisterForm
