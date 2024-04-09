import { useParams } from 'react-router-dom'

import { useHttp } from '../../hooks/useHttp'
import { fetchCommentByUserId } from '../../services/api'

const Comments = () => {
	const { userId } = useParams()

	const [comments, setComments, { loading }] = useHttp(fetchCommentByUserId, userId)
	return (
		<div>
			Comments
			{loading && <h1>Loading...</h1>}
			<ul>
				{comments?.map(comment => (
					<li key={comment.id}>{comment.body}</li>
				))}
			</ul>
		</div>
	)
}

export default Comments
