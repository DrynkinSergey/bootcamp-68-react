import { useState } from 'react'
import FormIdLabels from './components/Forms/FormIdLabels'
import RegisterForm from './components/Forms/RegisterForm'
import Employees from './components/Employees/Employees'

const App = () => {
	const [countOfFields, setCountOfFields] = useState(3)
	const handleRegister = data => {
		console.log('Fetch register....')
		setTimeout(() => {
			console.log(data)
			console.log('Register is done!🔥')
		}, 2000)
	}
	return (
		<div className=''>
			{/* <RegisterFormUncontrolled onRegister={handleRegister} /> */}
			{/* <RegisterForm onRegister={handleRegister} /> */}
			{/* <button onClick={() => setCountOfFields(prev => prev + 1)}>{countOfFields}</button> */}
			{/* <RegisterForm onRegister={handleRegister} /> */}
			{/* <FormIdLabels countOfFields={countOfFields} /> */}
			<Employees />
		</div>
	)
}

export default App
