import React from 'react'
import { useSelector } from 'react-redux'
import { selectTopicByTitle } from '../redux/topicSlice'
import { useParams } from 'react-router-dom'

export const Topic = () => {
	const { topicTitle } = useParams()
	const topic = useSelector(state => selectTopicByTitle(state, topicTitle))
	console.log(topic)
	if (!topic) {
		return <h1>No data available</h1>
	}
	return (
		<div>
			<h1>{topic.title}</h1>
			<h3>{topic.desc}</h3>
			<p>Views: {topic.views}</p>
			<p>Likes: {topic.likes}</p>
			<p>Dislikes: {topic.dislikes}</p>
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
