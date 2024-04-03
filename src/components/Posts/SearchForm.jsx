import { Field, Form, Formik } from 'formik'
import s from './Posts.module.css'

const SearchForm = ({ setQuery }) => {
	const handleSubmit = (data, options) => {
		setQuery(data.query)
		options.resetForm()
	}
	const initialValues = { query: '' }
	return (
		<div>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form>
					<Field name='query' type='text' className='input' />
					<button className='btn border' type='submit'>
						Search
					</button>
					{/* <button type='button' onClick={() => setQuery('')} className='btn border'>
						Reset
					</button> */}
				</Form>
			</Formik>
		</div>
	)
}

export default SearchForm
