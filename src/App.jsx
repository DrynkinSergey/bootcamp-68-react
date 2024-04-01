import RegisterFormUncontrolled from './components/Forms/RegisterFormUncontrolled'

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
			<RegisterFormUncontrolled onRegister={handleRegister} />
		</div>
	)
}

export default App
