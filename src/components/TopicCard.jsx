import { Link } from 'react-router-dom'

export const TopicCard = ({ topic }) => {
	return (
		<li className='topic'>
			<Link to={`/topic/${topic.title}`}>{topic.title}</Link>
			<p>Views: {topic.views}</p>
			<p>Comments: {topic.comments.length}</p>
			<p>Likes: {topic.likes}</p>
			<p>Dislikes: {topic.dislikes}</p>
			<p>Author: {topic.author}</p>
			<p>{topic.createdAt}</p>
		</li>
	)
}
