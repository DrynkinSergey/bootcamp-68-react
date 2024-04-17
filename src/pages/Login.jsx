import { toast } from 'react-toastify'
import AuthForm from '../components/AuthForm'

const Login = () => {
	const handleSubmit = values => {
		toast.success('Login success')
		console.log(values)
	}
	const initialValues = {
		email: '',
		password: '',
	}
	return <AuthForm title='Login' onSubmit={handleSubmit} initialValues={initialValues} />
}

export default Login
