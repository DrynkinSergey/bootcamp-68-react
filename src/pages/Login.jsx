import { toast } from 'react-toastify'
import AuthForm from '../components/AuthForm'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../redux/auth/operations'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleSubmit = values => {
		dispatch(loginThunk(values))
			.unwrap()
			.then(() => navigate('/'))
			.catch(() => toast.error('Email or password invalid'))
	}
	const initialValues = {
		email: '',
		password: '',
	}
	return <AuthForm title='Login' onSubmit={handleSubmit} initialValues={initialValues} />
}

export default Login
