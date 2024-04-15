import { Field, Form, Formik } from 'formik'
import s from './TodoList.module.css'
import { useDispatch } from 'react-redux'
import { addTodoThunk } from '../../redux/todolist/operations'

const AddForm = () => {
	const dispatch = useDispatch()
	const handleSubmit = (data, options) => {
		dispatch(addTodoThunk(data))
		options.resetForm()
	}
	const initialValues = {
		todo: '',
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className='flex'>
				<Field className={s.input} type='text' name='todo' />
				<button type='submit' className='btn border'>
					Add
				</button>
			</Form>
		</Formik>
	)
}

export default AddForm
