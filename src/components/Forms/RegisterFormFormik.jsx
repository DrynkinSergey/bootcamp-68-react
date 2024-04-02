import { Field, Form, Formik } from 'formik'
import { nanoid } from 'nanoid'

const RegisterFormFormik = ({ onRegister }) => {
	const countries = ['usa', 'ukraine', 'canada', 'uk', 'poland'] // getCounties()
	const handleSubmit = (values, options) => {
		onRegister({ ...values, id: nanoid(), author: 'Sergey' })
		options.resetForm()
	}

	const initialValues = {
		username: '',
		email: '',
		age: '',
		password: '',
		country: '',
		message: '',
		gender: '',
		rules: false,
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			{({ values }) => (
				<Form className='form'>
					<label className='label'>
						Name:
						<Field type='text' placeholder='Enter your name...' name='username' className='input' />
					</label>
					<Field type='text' placeholder='Enter your email...' name='email' className='input' />
					<Field type='password' placeholder='Enter your password...' name='password' className='input' />
					<Field type='number' placeholder='Enter your age...' name='age' className='input' />
					<Field as='select' name='country' className='input'>
						{countries.map(country => (
							<option key={country} value={country}>
								{country}
							</option>
						))}
					</Field>
					<Field as='textarea' cols='20' rows='5' className='input' name='message' />
					<label>
						<Field type='radio' name='gender' value='male' />
						Male
					</label>
					<label>
						<Field type='radio' name='gender' value='female' />
						Female
					</label>
					<label>
						<Field type='checkbox' name='rules' /> I understand rules!
					</label>
					<button disabled={!values.rules} type='submit' className='btn border'>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default RegisterFormFormik
