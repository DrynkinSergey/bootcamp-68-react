import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaCommentAlt, FaEye } from 'react-icons/fa'

export const TopicCard = ({ topic }) => {
	return (
		<li className='topic'>
			<Link to={`/topic/${topic.title}`}>{topic.title}</Link>
			<p>
				<FaEye /> {topic.views}
			</p>
			<p>
				{topic.comments.length}
				<FaCommentAlt />
			</p>
			<p>
				{topic.likes}
				<AiFillLike />
			</p>
			<p>
				{topic.dislikes}
				<AiFillDislike />
			</p>
			<p>Author: {topic.author}</p>
			<p>{topic.createdAt}</p>
		</li>
	)
}
