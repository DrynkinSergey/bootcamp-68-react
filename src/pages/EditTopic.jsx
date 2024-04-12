import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { selectTags } from '../redux/tagsSlice'
import { editTopic, selectTopicByTitle } from '../redux/topicSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const EditTopic = () => {
	const { topicTitle } = useParams()
	const topic = useSelector(state => selectTopicByTitle(state, topicTitle))

	const tags = useSelector(selectTags)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = values => {
		dispatch(editTopic({ ...topic, ...values }))
		navigate(`/topic/${values.title}`)
		toast.info('Topic edited!')
	}
	const initialValues = {
		title: topic.title,
		desc: topic.desc,
		tag: topic.tag,
		author: topic.author,
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
						Edit topic
					</button>
					<button onClick={() => navigate('/')} className='btn border red' type='button'>
						Cancel
					</button>
				</Form>
			</Formik>
		</div>
	)
}
