import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Modal from '../modal/Modal'

import { fetchPostsByUserId } from '../../services/api'
import { useToggle } from '../../hooks/useToggle'
import { useHttp } from '../../hooks/useHttp'

const Posts = () => {
	const { userId } = useParams()

	const [posts, _, { loading }] = useHttp(fetchPostsByUserId, userId)

	const { isOpen, toggle } = useToggle()
	const [content, setContent] = useState('')
	const showContent = post => {
		setContent(post)
		toggle()
	}
	return (
		<div>
			<h2>Posts</h2>
			{loading && <h1>Loading...</h1>}
			<ul>
				{posts?.map(post => (
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
