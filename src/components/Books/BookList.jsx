import BookItem from './BookItem'

const BookList = ({ books = [], onDelete, searchStr }) => {
	if (!books.length && searchStr) {
		return <h2>Search query is not valid</h2>
	} else if (!books.length) {
		return <h2>No available books...</h2>
	}
	return (
		<ul>
			<h2>Book list</h2>
			{books.map(book => (
				<BookItem item={book} key={book.id} onDelete={onDelete} />
			))}
		</ul>
	)
}

export default BookList
