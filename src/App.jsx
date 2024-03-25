import Button from './components/Button/Button'
import Header from './components/header/Header'
import List from './components/list/List'
import TextBox from './components/textBox/TextBox'

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
	return (
		<div>
			<Header />
			<TextBox text='Hello world' />
			<Button title='Submit' />
			<Button title={titleBtn} count={22} />

			<List data={filmsData} />
			<List data={todosData} title='Todos section' />
		</div>
	)
}

export default App
