import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseDisLikeCount, increaseLikeCount, increaseViews, selectTopicByTitle } from '../redux/topicSlice'
import { useParams } from 'react-router-dom'

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
			{topic.comments.length ? (
				<ul>
					{topic.comments.map(comment => (
						<li key={comment.id}>{comment.text}</li>
					))}
				</ul>
			) : (
				<p>No comments yet</p>
			)}
		</div>
	)
}
