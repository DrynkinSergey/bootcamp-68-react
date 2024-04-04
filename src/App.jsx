import { useContext, useState } from 'react'
import { TodoList } from './components/TodoList/TodoList'
import { UserContext } from './context/ContextProvider'
import { LoginForm } from './LoginForm'
import { Header } from './Header'
import PostsApp from './components/Posts/PostsApp'
import BooksApp from './components/Books/BooksApp'
import Modal from './components/Modal/Modal'
import { useToggle } from './hooks/useToggle'

const App = ({ name, surname }) => {
	const { isLoggedIn } = useContext(UserContext)

	const { toggle, isOpen } = useToggle()

	if (!isLoggedIn) {
		return <LoginForm />
	}

	return (
		<div>
			<Header />
			<button onClick={toggle}>Open new modal</button>
			{isOpen && <Modal closeModal={toggle}>App modal</Modal>}
			{/* <TodoList /> */}
			<PostsApp />
			<BooksApp />
		</div>
	)
}

export default App
