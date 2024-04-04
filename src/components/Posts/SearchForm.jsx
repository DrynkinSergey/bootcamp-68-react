import { Field, Form, Formik } from 'formik'
import s from './Posts.module.css'
import { useContext, useEffect, useRef } from 'react'
import { MyContext } from '../../main'

const SearchForm = ({ setQuery, name, surname }) => {
	const handleSubmit = (data, options) => {
		setQuery(data.query)
		options.resetForm()
	}
	const myRef = useRef()
	useEffect(() => {
		myRef.current.focus()
	}, [])
	const initialValues = { query: '' }

	const { auto, age } = useContext(MyContext)

	return (
		<div>
			<h1>
				{name} {surname} {auto} {age}
			</h1>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form>
					<Field name='query' type='text' className='input' />
					<button ref={myRef} className='btn border' type='submit'>
						Search
					</button>

					{/* <button type='button' onClick={() => setQuery('')} className='btn border'>
						Reset
					</button> */}
				</Form>
			</Formik>
		</div>
	)
}

export default SearchForm
