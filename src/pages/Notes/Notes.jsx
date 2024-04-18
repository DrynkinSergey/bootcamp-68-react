import { useDispatch, useSelector } from 'react-redux'
import NotesList from './NotesList'
import { fetchNotes } from '../../redux/notes/operations'
import { useEffect } from 'react'
import { selectNotes, selectTags } from '../../redux/notes/slice'
import { Link } from 'react-router-dom'

const Notes = () => {
	const dispatch = useDispatch()
	const tags = useSelector(selectTags)
	const notes = useSelector(selectNotes)

	console.log(tags)
	useEffect(() => {
		dispatch(fetchNotes())
	}, [dispatch])
	return (
		<div>
			<h2>Notes app</h2>
			<h2>Tag list:</h2>

			<ul className='tags'>
				{tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
			<Link to='add' className='btn border'>
				Add new note
			</Link>

			<NotesList title='Only liked notes' notes={notes.filter(note => note.liked)} />
			<NotesList notes={notes} />
			{tags.map(tag => (
				<NotesList title={tag} key={tag} notes={notes.filter(note => note.tags.includes(tag))} />
			))}
		</div>
	)
}

export default Notes
