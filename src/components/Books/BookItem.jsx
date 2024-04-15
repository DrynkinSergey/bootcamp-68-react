import { useDispatch } from 'react-redux'
import clsx from 'clsx'
import { deleteBookThunk, toggleLikeThunk } from '../../redux/books/operations'
const BookItem = ({ item }) => {
	const dispatch = useDispatch()
	const { id, name, description, author, liked } = item
	return (
		<li className={clsx(liked && 'liked')}>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>{author}</p>
			<button onClick={() => dispatch(toggleLikeThunk(item))} className='btn border'>
				{liked ? 'Dislike' : 'Like'}
			</button>
			<button onClick={() => dispatch(deleteBookThunk(item.id))} className='btn border'>
				Delete
			</button>
		</li>
	)
}

export default BookItem
