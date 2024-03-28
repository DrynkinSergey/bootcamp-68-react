import { useEffect, useState } from 'react'
import todosData from './../../assets/todos.json'
import { TodoItem } from './TodoItem'
import s from './TodoList.module.css'
import { nanoid } from 'nanoid'
export const TodoList = () => {
	const [todos, setTodos] = useState(() => {
		const savedData = JSON.parse(window.localStorage.getItem('todo-data'))
		if (savedData?.length) {
			return savedData
		}
		return []
	})

	const [newTodoTitle, setNewTodoTitle] = useState('')

	useEffect(() => {
		window.localStorage.setItem('todo-data', JSON.stringify(todos))
	}, [todos])

	const handleAddTodo = () => {
		const newTodo = { id: nanoid(), todo: newTodoTitle, completed: false }
		setTodos(prev => [...prev, newTodo])
		setNewTodoTitle('')
	}

	const handleDeleteSelected = () => {
		setTodos(prev => prev.filter(item => !item.completed))
	}

	const handleToggleTodo = id => {
		setTodos(prev =>
			prev.map(item => {
				if (item.id === id) {
					return { ...item, completed: !item.completed }
				} else {
					return item
				}
			})
		)
	}

	const handleDeleteTodo = id => {
		// 1 - Ідентифікація
		// 2 - Пробігти по массиву та прибрати один елемент
		// 3 - Залишити ті, що не підійшли по умові
		// console.log(id)
		// const newData = todos.filter(item => item.id !== id)
		// console.log(newData)
		setTodos(prev => prev.filter(item => item.id !== id))
	}

	const handleDeleteAll = () => {
		setTodos([])
	}

	return (
		<>
			<div className='flex'>
				<input value={newTodoTitle} onChange={e => setNewTodoTitle(e.target.value)} className={s.input} type='text' />
				<button onClick={handleAddTodo} className='btn border'>
					Add
				</button>
			</div>
			<ul className={s.list}>
				{todos.map(item => (
					<TodoItem key={item.id} {...item} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
				))}
			</ul>
			<button onClick={handleDeleteSelected} className='btn border'>
				Delete Selected
			</button>
			<button onClick={handleDeleteAll} className='btn border'>
				Delete all
			</button>
		</>
	)
}
