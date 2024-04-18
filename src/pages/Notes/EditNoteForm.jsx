import { Form, Formik } from 'formik'
import CustomField from '../../components/CustomField'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { addNoteThunk, updateFullNoteThunk } from '../../redux/notes/operations'
import { useEffect, useState } from 'react'
import { notesApi } from '../../config/notesApi'
import Loader from '../../components/Loader'

const EditNoteForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { id } = useParams()
	const [note, setNote] = useState(null)
	useEffect(() => {
		notesApi.get(`notes/${id}`).then(({ data }) => setNote(data))
	}, [id])
	const handleSubmit = (data, options) => {
		dispatch(updateFullNoteThunk({ ...note, ...data }))
			.unwrap()
			.then(() => navigate('/notes'))
		options.resetForm()
	}

	if (!note) {
		return <Loader />
	}
	return (
		<div className='flexCenter'>
			<Formik initialValues={{ ...note }} onSubmit={handleSubmit}>
				<Form className='form'>
					<CustomField name='title' placeholder='Enter title' />
					<CustomField name='description' placeholder='Enter description' />
					<CustomField name='tags' placeholder='Enter tags' />
					<button type='submit' className='border btn'>
						Add
					</button>
					<button onClick={() => navigate('/notes')} type='button' className='border btn red'>
						Cancel
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default EditNoteForm
