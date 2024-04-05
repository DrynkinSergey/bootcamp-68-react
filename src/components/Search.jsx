import { Field, Form, Formik } from 'formik'

const Search = ({ setQuery, query }) => {
	const handleSubmit = data => {
		setQuery(data.search)
	}
	const handleReset = options => {
		setQuery('')
		options.resetForm()
	}
	return (
		<Formik onSubmit={handleSubmit} initialValues={{ search: '' }}>
			{options => (
				<Form>
					<Field className='input' placeholder='Enter product name...' name='search' />
					{
						<>
							<button className='btn border' type='submit'>
								Search
							</button>
							<button className='btn border' type='button' onClick={() => handleReset(options)}>
								Reset
							</button>
						</>
					}
				</Form>
			)}
		</Formik>
	)
}

export default Search
