import { useParams, useLocation, Link } from 'react-router-dom'
import { useRef } from 'react'

import { useHttp } from '../../hooks/useHttp'
import { fetchPostsById } from '../../services/api'
const NewDetails = () => {
	const { newsId } = useParams()
	const [post] = useHttp(fetchPostsById, newsId)
	const location = useLocation()
	const goBackRef = useRef(location.state?.from)
	return (
		<div>
			NewDetails {newsId}
			<Link to={goBackRef.current}>Go back</Link>
			<div>
				<h2>{post?.title}</h2>
				<p>{post?.body}</p>
			</div>
		</div>
	)
}

export default NewDetails
