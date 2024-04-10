const BookItem = ({ item, onDelete }) => {
	const { id, name, description, author, liked } = item
	return (
		<li>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>{author}</p>
			<button onClick={() => onDelete(id)} className='btn border'>
				Delete
			</button>
		</li>
	)
}

export default BookItem
