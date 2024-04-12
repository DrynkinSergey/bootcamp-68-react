import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { addComment } from '../redux/topicSlice'
import { nanoid } from '@reduxjs/toolkit'
import moment from 'moment'

export const CommentForm = ({ topicId }) => {
	const dispatch = useDispatch()
	const handleSubmit = (values, options) => {
		console.log(values)
		const newComment = {
			id: nanoid(),
			text: values.text,
			author: 'admin',
			createdAt: moment().format('DD-MM-YYYY HH:mm:ss'),
		}
		dispatch(addComment({ id: topicId, comment: newComment }))
		options.resetForm()
	}
	const initialValues = {
		text: '',
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form>
				<Field className='input' name='text' as='textarea' rows='1' cols='30' placeholder='Enter comment text' />
				<button className='btn border' type='submit'>
					Add comment
				</button>
			</Form>
		</Formik>
	)
}
