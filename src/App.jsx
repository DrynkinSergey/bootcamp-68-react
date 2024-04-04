import { Counter } from './components/Counter/Counter'
import PostsApp from './components/Posts/PostsApp'
import { TodoList } from './components/TodoList/TodoList'

const App = () => {
	const sum = (a, b) => {
		console.log(a + b)
	}
	const sayHello = () => {
		console.log('Hello')
	}
	const greetings = name => {
		console.log('Hello', name)
	}
	return (
		<div>
			{/* <PostsApp /> */}
			<Counter />
			{/* <TodoList /> */}
			<button onClick={sayHello} className='btn border'>
				1
			</button>
			<button onClick={() => greetings('Oleh')} className='btn border'>
				2
			</button>
			<button onClick={() => sum(22, 33)} className='btn border'>
				3
			</button>
			<button onClick={() => console.log('InlineFn')} className='btn border'>
				4
			</button>
		</div>
	)
}

export default App
