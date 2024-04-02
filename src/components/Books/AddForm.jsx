import { Field, Form, Formik } from 'formik'
import { nanoid } from 'nanoid'

const AddForm = () => {
	const initialValues = {
		name: '',
		author: '',
		description: '',
		liked: false,
	}
	const handleSubmit = (data, options) => {
		console.log({ ...data, id: nanoid() })
		options.resetForm()
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className='form addForm'>
				<label className='label'>
					Book name:
					<Field type='text' name='name' className='input' />
				</label>
				<label className='label'>
					Author name:
					<Field type='text' name='author' className='input' />
				</label>
				<label className='label'>
					Description:
					<Field as='textarea' rows='3' cols='20' name='description' className='input' />
				</label>
				<button className='btn border' type='submit'>
					Add book
				</button>
			</Form>
		</Formik>
	)
}

export default AddForm
