import AuthForm from '../components/AuthForm'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../redux/auth/operations'
import * as yup from 'yup'
const Login = () => {
	const dispatch = useDispatch()
	const validationSchema = yup.object().shape({
		email: yup.string().email('Invalid email').required('Email is required'),
		password: yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
	})
	const handleSubmit = values => {
		dispatch(loginThunk(values))
	}
	const initialValues = {
		email: '',
		password: '',
	}
	return (
		<AuthForm title='Login' onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema} />
	)
}

export default Login
