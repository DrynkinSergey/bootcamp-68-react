const RegisterFormUncontrolled = ({ onRegister }) => {
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.currentTarget
		const username = form.elements.username.value
		const email = form.elements.email.value
		const password = form.elements.password.value
		onRegister({ username, email, password })
		form.reset()
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className='form'>
				<label className='label'>
					Username
					<input className='input' type='text' name='username' />
				</label>
				<label className='label'>
					Email
					<input className='input' type='email' name='email' />
				</label>
				<label className='label'>
					Password
					<input className='input' type='password' name='password' />
				</label>
				<button className='btn border'>Register</button>
			</form>
		</div>
	)
}

export default RegisterFormUncontrolled
