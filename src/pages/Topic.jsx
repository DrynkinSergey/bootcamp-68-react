import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	deleteComment,
	deleteTopic,
	increaseDisLikeCount,
	increaseLikeCount,
	increaseViews,
	selectTopicByTitle,
} from '../redux/topicSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentForm } from '../components/CommentForm'
import { AiFillLike } from 'react-icons/ai'
import { AiFillDislike } from 'react-icons/ai'
import { selectAuthorName } from '../redux/authSlice'
import { toast } from 'react-toastify'

export const Topic = () => {
	const { topicTitle } = useParams()
	const navigate = useNavigate()

	const user = useSelector(selectAuthorName)
	const topic = useSelector(state => selectTopicByTitle(state, topicTitle))

	const access = user === 'admin' || user === topic.author
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(increaseViews(topic.id))
	}, [dispatch, topic.id])

	const handleDelete = () => {
		dispatch(deleteTopic(topic.id))
		navigate('/')
		toast.info('Topic deleted!')
	}
	const handleDeleteComment = commentId => {
		dispatch(deleteComment({ topicId: topic.id, commentId: commentId }))
	}

	if (!topic) {
		return <h1>No data available</h1>
	}
	return (
		<div>
			{access && (
				<div>
					<button className='btn border' onClick={() => navigate(`edit`)}>
						Edit
					</button>
					<button onClick={handleDelete} className='btn border'>
						Delete
					</button>
				</div>
			)}
			<h1>{topic.title}</h1>
			<h3>{topic.desc}</h3>
			<p>Views: {topic.views}</p>
			<div>
				<p>Likes: {topic.likes}</p>
				<p>Dislikes: {topic.dislikes}</p>
			</div>
			<div>
				<button onClick={() => dispatch(increaseLikeCount(topic.id))} className='btn border'>
					<AiFillLike />
				</button>
				<button onClick={() => dispatch(increaseDisLikeCount(topic.id))} className='btn border'>
					<AiFillDislike />
				</button>
			</div>
			<p>{topic.createdAt}</p>
			<p>{topic.author}</p>
			<h2>Comments:</h2>
			<CommentForm topicId={topic.id} />
			{topic.comments.length ? (
				<ul className='commentList'>
					{topic.comments.map(comment => (
						<li className='comment' key={comment.id}>
							<h2>{comment.text}</h2>
							<p>{comment.author}</p>
							<p>{comment.createdAt}</p>
							{user === 'admin' && (
								<button onClick={() => handleDeleteComment(comment.id)} className='btn border red'>
									x
								</button>
							)}
						</li>
					))}
				</ul>
			) : (
				<p>No comments yet</p>
			)}
		</div>
	)
}
