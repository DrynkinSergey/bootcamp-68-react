import AddForm from './components/Books/AddForm'
import BookList from './components/Books/BookList'
import SearchBar from './components/Books/SearchBar'
import booksData from './assets/books.json'
import { useEffect, useState } from 'react'
const App = () => {
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

	const handleDelete = id => {
		setBooks(prev => prev.filter(item => item.id !== id))
	}

	const addBook = book => {
		setBooks(prev => [book, ...prev])
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
			<BookList books={filteredData} onDelete={handleDelete} />
		</div>
	)
}

export default App

// 1- Шаблон для структури
// Книга
// Список книг
// Додавання книги
// Пошук по автору або назві
// 2 - Отримання і відмальовку даних
