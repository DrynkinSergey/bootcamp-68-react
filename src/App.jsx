import RegisterForm from './components/Forms/RegisterForm'

const App = () => {
	const handleRegister = data => {
		console.log('Fetch register....')
		setTimeout(() => {
			console.log(data)
			console.log('Register is done!🔥')
		}, 2000)
	}
	return (
		<div className='flexCenter formWrapper'>
			<RegisterForm onRegister={handleRegister} />
		</div>
	)
}

export default App
