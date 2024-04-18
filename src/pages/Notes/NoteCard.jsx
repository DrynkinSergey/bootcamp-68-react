import { useDispatch } from 'react-redux'
import { deleteNoteThunk, updateNoteThunk } from '../../redux/notes/operations'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const NoteCard = ({ note }) => {
	const dispatch = useDispatch()
	return (
		<li className={clsx('note', note.liked && 'liked')}>
			<h3>{note.title}</h3>
			<p>{note.description}</p>
			<ul className='tags'>
				{note.tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
			<p>{note.createdAt}</p>
			<button onClick={() => dispatch(updateNoteThunk(note))} className='btn border'>
				Like
			</button>
			<button onClick={() => dispatch(deleteNoteThunk(note.id))} className='btn border'>
				Delete
			</button>
			<Link to={`${note.id}/edit`} className='btn border'>
				Edit
			</Link>
			<Link to={`/notes/${note.id}`} className='btn border'>
				See more
			</Link>
		</li>
	)
}

export default NoteCard
