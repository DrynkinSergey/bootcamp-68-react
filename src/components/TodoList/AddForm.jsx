import { Field, Form, Formik } from 'formik'
import s from './TodoList.module.css'

const AddForm = ({ addTodo }) => {
	const handleSubmit = (data, options) => {
		addTodo(data.newTodo)
		options.resetForm()
	}
	const initialValues = {
		newTodo: '',
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className='flex'>
				<Field className={s.input} type='text' name='newTodo' />
				<button type='submit' className='btn border'>
					Add
				</button>
			</Form>
		</Formik>
	)
}

export default AddForm
