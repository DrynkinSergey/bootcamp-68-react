import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseDisLikeCount, increaseLikeCount, increaseViews, selectTopicByTitle } from '../redux/topicSlice'
import { useParams } from 'react-router-dom'
import { CommentForm } from '../components/CommentForm'

export const Topic = () => {
	const { topicTitle } = useParams()
	const topic = useSelector(state => selectTopicByTitle(state, topicTitle))
	const dispatch = useDispatch()
	console.log(topic)
	useEffect(() => {
		dispatch(increaseViews(topic.id))
	}, [dispatch, topic.id])
	if (!topic) {
		return <h1>No data available</h1>
	}
	return (
		<div>
			<h1>{topic.title}</h1>
			<h3>{topic.desc}</h3>
			<p>Views: {topic.views}</p>

			<div>
				<p>Likes: {topic.likes}</p>
				<button onClick={() => dispatch(increaseLikeCount(topic.id))} className='btn border'>
					Like
				</button>
			</div>
			<div>
				<p>Dislikes: {topic.dislikes}</p>
				<button onClick={() => dispatch(increaseDisLikeCount(topic.id))} className='btn border'>
					Dislike
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
						</li>
					))}
				</ul>
			) : (
				<p>No comments yet</p>
			)}
		</div>
	)
}
