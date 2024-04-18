import { Form, Formik } from 'formik'
import CustomField from '../../components/CustomField'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/slice'
import { addNoteThunk } from '../../redux/notes/operations'

const AddNoteForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const author = useSelector(selectUser).name
	const handleSubmit = (data, options) => {
		const newNote = {
			...data,
			tags: data.tags.split(',').map(tag => tag.trim()),
			createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
			author,
		}
		dispatch(addNoteThunk(newNote))
			.unwrap()
			.then(() => navigate('/notes'))
		options.resetForm()
	}
	const initialValues = {
		title: '',
		description: '',
		tags: '',
	}
	return (
		<div className='flexCenter'>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
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

export default AddNoteForm
