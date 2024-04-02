import AddForm from './components/Books/AddForm'
import BookList from './components/Books/BookList'
import SearchBar from './components/Books/SearchBar'
import booksData from './assets/books.json'
import { useState } from 'react'
const App = () => {
	const [books, setBooks] = useState(booksData)
	const [searchStr, setSearchStr] = useState('')
	const handleDelete = id => {
		console.log(id)
		setBooks(prev => prev.filter(item => item.id !== id))
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
			<AddForm />
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
