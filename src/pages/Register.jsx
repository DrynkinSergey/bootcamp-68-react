import { toast } from 'react-toastify'
import AuthForm from '../components/AuthForm'

const Register = () => {
	const handleSubmit = values => {
		toast.info('Register success')
		console.log(values)
	}
	const initialValues = {
		name: '',
		password: '',
		email: '',
	}
	return <AuthForm title='Register' onSubmit={handleSubmit} initialValues={initialValues} type='register' />
}

export default Register
