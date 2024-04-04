import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import todosData from './../../assets/todos.json'
import { TodoItem } from './TodoItem'
import s from './TodoList.module.css'
import { nanoid } from 'nanoid'
import { Field, Form, Formik } from 'formik'

import Filter from './Filter'
import { MyContext } from '../../main'
export const TodoList = () => {
	const [todos, setTodos] = useState(() => {
		const savedData = JSON.parse(window.localStorage.getItem('todo-data'))
		if (savedData?.length) {
			return savedData
		}
		return []
	})
	const [filterValue, setFilterValue] = useState('all')
	const [value, setValue] = useState(1)

	const btnRef = useRef()
	const myNewRef = useRef(0)

	useEffect(() => {
		myNewRef.current++
		console.log('Render count: ', myNewRef.current)
	})
	useEffect(() => {
		console.log(btnRef)
		btnRef.current.focus()
		// setInterval(() => {
		// 	btnRef.current.click()
		// }, 2000)
		// btnRef.current.innerHTML = 'MY REF BTN'
	}, [])

	useEffect(() => {
		window.localStorage.setItem('todo-data', JSON.stringify(todos))
	}, [todos])

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
		setTodos(prev => prev.filter(item => item.id !== id))
	}

	const handleDeleteAll = () => {
		setTodos([])
	}

	const handleSubmit = (data, options) => {
		const newTodo = { id: nanoid(), todo: data.newTodo, completed: false }
		setTodos(prev => [...prev, newTodo])
		options.resetForm()
	}
	const initialValues = {
		newTodo: '',
	}
	const getFilteredData = () => {
		console.log('Filter is done!')
		switch (filterValue) {
			case 'active':
				return todos.filter(item => !item.completed)
			case 'completed':
				return todos.filter(item => item.completed)
			default:
				return todos
		}
	}

	const filteredData = useMemo(() => getFilteredData(), [filterValue, todos])
	const { auto } = useContext(MyContext)
	return (
		<section className={s.wrapper}>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form className='flex'>
					<Field className={s.input} type='text' name='newTodo' />
					<button type='submit' className='btn border'>
						Add
					</button>
				</Form>
			</Formik>

			<Filter filterValue={filterValue} setFilterValue={setFilterValue} />

			<button ref={btnRef} onClick={() => setValue(prev => prev + 1)} className='btn border'>
				Clicks count: {value}
			</button>
			<button onClick={() => myNewRef.current++} className='btn border'>
				Change ref count
			</button>
			<h1>{auto}</h1>
			<ul className={s.list}>
				{filteredData.map(item => (
					<TodoItem key={item.id} {...item} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
				))}
			</ul>
			<button onClick={handleDeleteSelected} className='btn border'>
				Delete Selected
			</button>

			<button onClick={handleDeleteAll} className='btn border'>
				Delete all
			</button>
		</section>
	)
}
