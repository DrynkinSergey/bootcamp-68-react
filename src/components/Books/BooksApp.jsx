import { toast } from 'react-toastify'
import AddForm from './AddForm'
import SearchBar from './SearchBar'
import BookList from './BookList'
import { useSelector, useDispatch } from 'react-redux'
import { addNewBook, deleteBook, selectBooks } from '../../redux/books/slice'
import { selectFilter } from '../../redux/filterSlice'

const BooksApp = () => {
	const books = useSelector(selectBooks)
	const searchStr = useSelector(selectFilter)
	const dispatch = useDispatch()
	const handleDelete = id => {
		dispatch(deleteBook(id))
	}

	const addBook = book => {
		const isExist = books.some(item => item.name === book.name && item.author === book.author)
		if (isExist) {
			return toast.error('This book already exist!')
		}
		dispatch(addNewBook(book))
		toast.success('Book was added! 🔥')
	}

	const getFilteredData = () => {
		return books.filter(
			item =>
				item.name.toLowerCase().includes(searchStr.toLowerCase()) ||
				item.author.toLowerCase().includes(searchStr.toLowerCase()) ||
				item.description.toLowerCase().includes(searchStr.toLowerCase())
		)
	}
	const filteredData = getFilteredData()

	return (
		<div>
			<h1>Book Shelf</h1>
			<AddForm addBook={addBook} />
			<SearchBar searchStr={searchStr} />
			<BookList searchStr={searchStr} books={filteredData} onDelete={handleDelete} />
		</div>
	)
}

export default BooksApp
