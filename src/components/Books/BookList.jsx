import BookItem from './BookItem'

const BookList = ({ books = [] }) => {
	if (!books.length) {
		return <h2>No available books...</h2>
	}
	return (
		<ul>
			<h2>Book list</h2>
			{books.map(book => (
				<BookItem item={book} key={book.id} />
			))}
		</ul>
	)
}

export default BookList
