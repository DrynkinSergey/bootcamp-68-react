import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { notesApi } from '../../config/notesApi'
import Loader from '../../components/Loader'

const SingleNote = () => {
	const { id } = useParams()
	const [note, setNote] = useState(null)

	useEffect(() => {
		notesApi.get(`notes/${id}`).then(({ data }) => setNote(data))
	}, [id])
	if (!note) {
		return <Loader />
	}
	return (
		<div>
			<Link className='btn border' to='/notes'>
				Go back
			</Link>
			<img src={note.avatar} alt={note.title} />
			<h1>{note.title}</h1>
			<p>{note.description}</p>
			<ul className='tags'>
				{note.tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
			<p>{note.createdAt}</p>
			<p>{note.author}</p>
		</div>
	)
}

export default SingleNote
