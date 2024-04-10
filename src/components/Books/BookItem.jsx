import { useDispatch } from 'react-redux'
import { toggleLike } from '../../redux/books/actions'
import clsx from 'clsx'
const BookItem = ({ item, onDelete }) => {
	const dispatch = useDispatch()
	const { id, name, description, author, liked } = item
	return (
		<li className={clsx(liked && 'liked')}>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>{author}</p>
			<button onClick={() => dispatch(toggleLike(id))} className='btn border'>
				{liked ? 'Dislike' : 'Like'}
			</button>
			<button onClick={() => onDelete(id)} className='btn border'>
				Delete
			</button>
		</li>
	)
}

export default BookItem
