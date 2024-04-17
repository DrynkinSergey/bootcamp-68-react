import { toast } from 'react-toastify'
import AuthForm from '../components/AuthForm'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../redux/auth/operations'
import { useNavigate } from 'react-router-dom'

const Register = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
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
	return <AuthForm title='Register' onSubmit={handleSubmit} initialValues={initialValues} type='register' />
}

export default Register
