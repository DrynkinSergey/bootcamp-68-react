import { Field, Form, Formik } from 'formik'
import s from './TodoList.module.css'

const AddForm = () => {
	const handleSubmit = (data, options) => {
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
