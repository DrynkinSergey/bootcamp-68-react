import AddForm from './components/Books/AddForm'
import BookList from './components/Books/BookList'
import SearchBar from './components/Books/SearchBar'
import booksData from './assets/books.json'
import { useState } from 'react'
const App = () => {
	const [books, setBooks] = useState(booksData)
	return (
		<div>
			<h1>Book Shelf</h1>
			<AddForm />
			<SearchBar />
			<BookList books={books} />
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
