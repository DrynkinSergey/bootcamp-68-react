import { useState } from 'react'
import Modal from '../Modal/Modal'
import BookItem from './BookItem'
import { useToggle } from '../../hooks/useToggle'

const BookList = ({ books = [], onDelete, searchStr }) => {
	const { openModal, closeModal, isOpen } = useToggle()

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
			<button onClick={openModal} className='btn border'>
				Open modal
			</button>
			{isOpen && <Modal closeModal={closeModal}>hello</Modal>}
		</ul>
	)
}

export default BookList
