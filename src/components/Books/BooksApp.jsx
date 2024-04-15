import { toast } from 'react-toastify'
import AddForm from './AddForm'
import SearchBar from './SearchBar'
import BookList from './BookList'
import { useSelector, useDispatch } from 'react-redux'
import { selectBooks } from '../../redux/books/slice'
import { selectFilter } from '../../redux/filterSlice'
import { fetchBooksThunk } from '../../redux/books/operations'
import { useEffect } from 'react'

const BooksApp = () => {
	const books = useSelector(selectBooks)
	const searchStr = useSelector(selectFilter)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchBooksThunk())
	}, [dispatch])

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
			<AddForm />
			<SearchBar searchStr={searchStr} />
			<BookList searchStr={searchStr} books={filteredData} />
		</div>
	)
}

export default BooksApp
