import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeQuery } from '../redux/topicSlice'

export const Search = () => {
	const dispatch = useDispatch()
	const initialValues = {
		query: '',
	}
	const handleSubmit = values => {
		console.log(values)
		dispatch(changeQuery(values.query))
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form>
				<Field className='input' name='query' placeholder='Enter title or description' />
				<button className='btn border' type='submit'>
					Search
				</button>
			</Form>
		</Formik>
	)
}
