import booksData from '../../assets/books.json'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import AddForm from './AddForm'
import SearchBar from './SearchBar'
import BookList from './BookList'

const BooksApp = () => {
	const [books, setBooks] = useState(() => {
		const savedBooks = JSON.parse(window.localStorage.getItem('books'))
		if (savedBooks?.length) {
			return savedBooks
		}
		return booksData
	})
	const [searchStr, setSearchStr] = useState('')

	useEffect(() => {
		window.localStorage.setItem('books', JSON.stringify(books))
	}, [books])

	const handleDelete = id => {}

	const addBook = book => {
		const isExist = books.some(item => item.name === book.name && item.author === book.author)
		console.log(isExist)
		if (isExist) {
			return toast.error('This book already exist!')
		}
		setBooks(prev => [book, ...prev])
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
			<SearchBar searchStr={searchStr} setSearch={setSearchStr} />
			<BookList searchStr={searchStr} books={filteredData} onDelete={handleDelete} />
		</div>
	)
}

export default BooksApp
