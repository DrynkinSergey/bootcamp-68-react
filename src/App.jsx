import { useEffect, useState } from 'react'
import PostList from './components/Posts/PostList'
import SearchForm from './components/Posts/SearchForm'
import { fetchPosts } from './services/api'

const App = () => {
	const [items, setItems] = useState([])
	const [skip, setSkip] = useState(0)
	const [limit] = useState(3)

	useEffect(() => {
		const getData = async () => {
			try {
				const { posts, total } = await fetchPosts({ skip, limit })
				setItems(prev => [...prev, ...posts])
			} catch (error) {
				console.log(error.message)
			}
		}

		getData()
	}, [skip, limit])

	const handleLoadMore = () => {
		setSkip(prev => prev + limit)
	}
	return (
		<>
			<SearchForm />
			<PostList items={items} />
			<button onClick={handleLoadMore} className='btn border'>
				Load more
			</button>
		</>
	)
}

export default App
