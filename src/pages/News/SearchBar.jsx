import { Field, Form, Formik } from 'formik'

const SearchBar = ({ setSearchParams }) => {
	const initialValues = {
		search: '',
	}
	const handleSubmit = values => {
		console.log(values)
		setSearchParams(values.search ? { query: values.search } : {})
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form>
				<Field name='search' placeholder='Search...' className='input' />
				<button type='submit' className='btn border'>
					Search
				</button>
			</Form>
		</Formik>
	)
}

export default SearchBar
