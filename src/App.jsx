import Header from './components/header/Header'
import List from './components/list/List'
import Profile from './components/profile/Profile'
import userData from './assets/user.json'
import Modal from './components/modal/Modal'

const App = () => {
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

	return (
		<>
			<Header logoText='React' />
			<Modal title='Реклама'>
				<h2>Продам холодильник!</h2>
				<button>OK</button>
				<button>Cancel</button>
			</Modal>

			<Modal title='Профіль користувача'>
				<Profile user={userData} />
			</Modal>

			<List online={online} data={filmsData} title='Movies' />
			<List data={todosData} title='Todos section' />
		</>
	)
}

export default App
