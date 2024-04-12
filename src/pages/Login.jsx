import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login, selectIsLoggedIn } from '../redux/authSlice'

export const Login = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleSubmit = values => {
		dispatch(login(values))
	}
	const initialValues = {
		email: '',
		password: '',
	}
	if (isLoggedIn) {
		navigate('/')
	}
	return (
		<div className='flexCenter'>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form className='form'>
					<Field className='input' name='email' placeholder='Enter email' />
					<Field className='input' name='password' type='password' placeholder='Enter password' />
					<button className='btn border' type='submit'>
						Login
					</button>
					<p>
						You don't have an account? <Link to='/register'>Register!</Link>
					</p>
				</Form>
			</Formik>
		</div>
	)
}
