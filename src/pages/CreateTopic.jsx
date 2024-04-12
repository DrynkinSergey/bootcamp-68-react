import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { selectTags } from '../redux/tagsSlice'
import { addTopic } from '../redux/topicSlice'
import { useNavigate } from 'react-router-dom'

export const CreateTopic = () => {
	const tags = useSelector(selectTags)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleSubmit = values => {
		dispatch(addTopic(values))
		navigate('/')
	}
	const initialValues = {
		title: '',
		desc: '',
		tag: 'other',
	}
	return (
		<div className='flexCenter'>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form className='form'>
					<Field className='input' name='title' placeholder='Enter topic title' />
					<Field className='input' name='desc' as='textarea' rows='5' cols='30' placeholder='Enter topic description' />
					<Field className='input' name='tag' as='select'>
						{tags.map(tag => (
							<option key={tag} value={tag}>
								{tag}
							</option>
						))}
					</Field>
					<button className='btn border' type='submit'>
						Add topic
					</button>
					<button onClick={() => navigate('/')} className='btn border red' type='button'>
						Cancel
					</button>
				</Form>
			</Formik>
		</div>
	)
}
