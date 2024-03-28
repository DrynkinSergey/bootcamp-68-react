import { useEffect, useState } from 'react'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { Counter } from './components/Counter/Counter'
import Modal from './components/Modal/Modal'
import { TodoList } from './components/TodoList/TodoList'
import Button from './components/Button/Button'

const App = () => {
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)
	// const toggleModal = () => setIsOpen(prev => !prev)

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		openModal()
	// 	}, 10000)
	// }, [])
	return (
		<>
			{/* <Counter /> */}
			{/* <ColorPicker /> */}
			<TodoList />
			<Button onClick={openModal}>Open modal</Button>
			{isOpen && (
				<Modal closeModal={closeModal}>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit asperiores molestiae quidem, pariatur sunt
						soluta commodi ut officia ab, accusamus esse mollitia? Nulla molestias suscipit incidunt unde harum commodi
						perspiciatis.
					</p>
				</Modal>
			)}
		</>
	)
}

export default App
