import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import CustomField from './CustomField'

const AuthForm = ({ title, onSubmit, initialValues, type, validationSchema }) => {
	return (
		<div className='formWrapper flexCenter'>
			<Formik validationSchema={validationSchema} onSubmit={onSubmit} initialValues={initialValues}>
				<Form className='form'>
					{type === 'register' && <CustomField name='name' placeholder='Enter your name' />}
					<CustomField name='email' placeholder='Enter your email' />
					<CustomField name='password' type='password' placeholder='Enter your password' />

					<button className='btn border' type='submit'>
						{title}
					</button>
					<p>
						You {type === 'register' ? 'already have an account?' : "don't have an account?"}{' '}
						<Link to={type === 'register' ? '/login' : '/register'}> {type === 'register' ? 'Login' : 'Register'}</Link>
					</p>
				</Form>
			</Formik>
		</div>
	)
}

export default AuthForm
