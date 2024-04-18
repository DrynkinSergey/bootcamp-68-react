import NoteCard from './NoteCard'

const NotesList = ({ title = 'All notes', notes = [] }) => {
	return (
		<section>
			<h2 className='title'>{title}</h2>
			<ul className='notesList'>
				{notes.map(note => (
					<NoteCard key={note.id} note={note} />
				))}
			</ul>
		</section>
	)
}

export default NotesList
