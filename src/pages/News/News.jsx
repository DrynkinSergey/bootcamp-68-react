import { Link, useSearchParams, useLocation } from 'react-router-dom'
import { useMemo } from 'react'

import SearchBar from './SearchBar'

import { useHttp } from './../../hooks/useHttp'
import { fetchPosts, fetchPostsByQuery } from './../../services/api'

const News = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const query = searchParams.get('query') || ''
	console.log(query)
	const args = useMemo(() => ({ q: query }), [query])
	const [news] = useHttp(query ? fetchPostsByQuery : fetchPosts, args)
	const location = useLocation()
	return (
		<div>
			<h1>News</h1>
			<SearchBar setSearchParams={setSearchParams} />
			<ul>
				{news?.map(post => (
					<li key={post.id}>
						<Link state={{ from: location }} to={post.id.toString()}>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default News
