import { Field, Form, Formik } from 'formik'
import s from './TodoList.module.css'
import { useAddTodoMutation } from '../../redux/rtkQuery/todosApi'

const AddForm = () => {
	const [addTodo] = useAddTodoMutation()
	const handleSubmit = (data, options) => {
		options.resetForm()
		addTodo(data)
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
