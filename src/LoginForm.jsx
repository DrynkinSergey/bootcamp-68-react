import { useContext, useState } from 'react'
import { UserContext } from './context/ContextProvider'

export const LoginForm = () => {
	const [username, setUsername] = useState('')
	const { login } = useContext(UserContext)
	const handleSubmit = e => {
		e.preventDefault()
		console.log(username)
		login(username)
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={username} onChange={e => setUsername(e.target.value)} />
			<button>Login</button>
		</form>
	)
}
