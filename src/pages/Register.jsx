import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../redux/authSlice'

export const Register = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleSubmit = values => {
		console.log(values)
		dispatch(register(values))
		navigate('/login')
	}
	const initialValues = {
		name: '',
		email: '',
		password: '',
	}
	return (
		<div className='flexCenter'>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form className='form'>
					<Field className='input' name='name' placeholder='Enter username' />
					<Field className='input' name='email' placeholder='Enter email' />
					<Field className='input' name='password' type='password' placeholder='Enter password' />
					<button className='btn border' type='submit'>
						Register
					</button>
					<p>
						You already have an account? <Link to='/login'>Login!</Link>
					</p>
				</Form>
			</Formik>
		</div>
	)
}
