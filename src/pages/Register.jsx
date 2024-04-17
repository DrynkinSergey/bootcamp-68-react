import { toast } from 'react-toastify'
import AuthForm from '../components/AuthForm'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../redux/auth/operations'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
const Register = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const validationSchema = yup.object().shape({
		name: yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
		email: yup.string().email('Invalid email').required('Email is required'),
		password: yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
	})
	const handleSubmit = values => {
		dispatch(registerThunk(values))
			.unwrap()
			.then(data => {
				toast.success(`Welcome, ${data.user.name}!`)
				navigate('/')
			})
			.catch(() => toast.error('Credentials invalid'))
	}
	const initialValues = {
		name: '',
		password: '',
		email: '',
	}
	return (
		<AuthForm
			title='Register'
			onSubmit={handleSubmit}
			initialValues={initialValues}
			type='register'
			validationSchema={validationSchema}
		/>
	)
}

export default Register
