import { ErrorMessage, Field, Form, Formik } from 'formik'
import { nanoid } from 'nanoid'
import * as Yup from 'yup'
const AddForm = ({ addBook }) => {
	const addSchema = Yup.object().shape({
		name: Yup.string().min(3, 'Field must be more than 3').max(100, 'Field must be less than 100').required('Required'),
		author: Yup.string().min(3, 'Field must be more than 3').max(25, 'Field must be less than 25').required('Required'),
		description: Yup.string()
			.min(3, 'Field must be more than 3')
			.max(255, 'Field must be less than 255')
			.required('Required'),
	})
	const initialValues = {
		name: '',
		author: '',
		description: '',
		liked: false,
	}
	const handleSubmit = (data, options) => {
		addBook({ ...data, id: nanoid() })
		options.resetForm()
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={addSchema}>
			<Form className='form addForm'>
				<label className='label'>
					Book name:
					<Field type='text' name='name' className='input' />
					<ErrorMessage component='span' className='red' name='name' />
				</label>
				<label className='label'>
					Author name:
					<Field type='text' name='author' className='input' />
					<ErrorMessage component='span' className='red' name='author' />
				</label>
				<label className='label'>
					Description:
					<Field as='textarea' rows='3' cols='20' name='description' className='input' />
					<ErrorMessage component='span' className='red' name='description' />
				</label>
				<button className='btn border' type='submit'>
					Add book
				</button>
			</Form>
		</Formik>
	)
}

export default AddForm
