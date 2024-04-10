import BooksApp from './components/Books/BooksApp'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'
const App = () => {
	return (
		<div>
			<Counter />
			<TodoList />
			<BooksApp />
		</div>
	)
}

export default App
