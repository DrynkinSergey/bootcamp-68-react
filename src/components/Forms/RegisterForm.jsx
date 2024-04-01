import { useId, useState } from 'react'

const RegisterForm = ({ onRegister }) => {
	const usernameId = useId()
	const [formState, setFormState] = useState({
		username: '',
		age: 1,
		country: 'ukraine',
		password: '',
		email: '',
		gender: 'male',
		accept: false,
	})

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
		const { name, value, type } = e.target
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
		if (type === 'checkbox') {
			return setFormState(prev => ({ ...prev, [name]: !prev[name] }))
		}

		setFormState(prev => ({ ...prev, [name]: value }))
	}

	return (
		<form onSubmit={handleSubmit} className='form'>
			<label htmlFor={usernameId} className='label'>
				Username
				<input
					id={usernameId}
					value={formState.username}
					onChange={handleChangeInput}
					className='input'
					type='text'
					name='username'
				/>
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

			<div>
				<label>
					<input
						onChange={handleChangeInput}
						checked={formState.gender === 'male'}
						type='radio'
						value='male'
						name='gender'
					/>
					Male
				</label>
				<label>
					<input
						onChange={handleChangeInput}
						checked={formState.gender === 'female'}
						type='radio'
						value='female'
						name='gender'
					/>
					Female
				</label>
			</div>
			<label>
				<input
					onChange={handleChangeInput}
					checked={formState.accept}
					type='checkbox'
					className='input'
					name='accept'
				/>
				Accept rules
			</label>

			<button className='btn border'>Register</button>
		</form>
	)
}

export default RegisterForm
