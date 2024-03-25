import Button from './components/Button/Button'
import Header from './components/header/Header'
import List from './components/list/List'
import Profile from './components/profile/Profile'
import TextBox from './components/textBox/TextBox'
import userData from './assets/user.json'

const App = () => {
	const titleBtn = 'Please click me'
	const filmsData = [
		{ id: '1', title: 'GoT' },
		{ id: '2', title: 'Harry Potter' },
		{ id: '3', title: 'Mr. Bean' },
		{ id: '1231313', title: 'Terminator' },
	]
	const todosData = [
		{ id: '1', title: 'Buy milk' },
		{ id: '2', title: 'Code' },
		{ id: '3', title: 'Walk ' },
		{ id: '14', title: 'Go to the cinema' },
		{ id: '11', title: 'Sleep' },
		{ id: '12', title: 'Feed the cat' },
	]

	const online = false
	const selectedTab = 'films'

	return (
		<div>
			<Header />
			<Profile user={userData} />
			{/* Рендер за умовою */}
			{online && <h1>Welcome!</h1>}
			{/* Тернарний умовний рендер! */}
			{online ? <h2>Hello bro!</h2> : <h2>Please login!</h2>}

			<TextBox text='Hello world' />
			<Button title='Submit' />
			<Button title={titleBtn} count={22} />

			{selectedTab === 'films' ? (
				<List online={online} data={filmsData} title='Movies' />
			) : (
				<List data={todosData} title='Todos section' />
			)}
		</div>
	)
}

export default App
