import { useEffect, useState } from 'react'
import { fetchPostsByUserId } from '../../services/api'
import { useParams } from 'react-router-dom'
import { useToggle } from '../../hooks/useToggle'
import Modal from '../modal/Modal'

const Posts = () => {
	const { userId } = useParams()
	const { isOpen, toggle } = useToggle()
	const [content, setContent] = useState('')
	const showContent = post => {
		setContent(post)
		toggle()
	}
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetchPostsByUserId(userId).then(data => setPosts(data))
	}, [userId])
	return (
		<div>
			<h2>Posts</h2>
			<ul>
				{posts.map(post => (
					<li onClick={() => showContent(post)} key={post.id}>
						{post.title}
					</li>
				))}
			</ul>
			{isOpen && (
				<Modal title={content.title} closeModal={toggle}>
					<h2>{content.title}</h2>
					<p>{content.body}</p>
				</Modal>
			)}
		</div>
	)
}

export default Posts
