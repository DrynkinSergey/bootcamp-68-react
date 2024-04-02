const BookItem = ({ item }) => {
	const { id, name, description, author, liked } = item
	return (
		<li>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>{author}</p>
			<button className='btn border'>Delete</button>
		</li>
	)
}

export default BookItem
