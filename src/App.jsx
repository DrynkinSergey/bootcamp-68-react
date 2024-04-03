import { useEffect, useState } from 'react'
import PostList from './components/Posts/PostList'
import SearchForm from './components/Posts/SearchForm'
import { fetchPosts, fetchPostsByQuery } from './services/api'
import Loader from './components/Posts/Loader'
import Error from './components/Posts/Error'
import Modal from './components/Modal/Modal'
import s from './components/Posts/Posts.module.css'
const App = () => {
	const [items, setItems] = useState([])
	const [skip, setSkip] = useState(0)
	const [limit] = useState(6)
	const [query, setQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [totalItems, setTotalItems] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	const [content, setContent] = useState(null)

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true)
				setError(false)
				const { posts, total } = query
					? await fetchPostsByQuery({ skip, q: query, limit })
					: await fetchPosts({ skip, limit })
				setItems(prev => [...prev, ...posts])

				setTotalItems(total)
			} catch (error) {
				console.log(error.message)
				setError(true)
			} finally {
				setLoading(false)
			}
		}

		getData()
	}, [skip, limit, query])

	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)
	const showPost = post => {
		openModal()
		setContent(post)
	}

	const handleLoadMore = () => {
		setSkip(prev => prev + limit)
	}

	const handleChangeQuery = queryStr => {
		setQuery(queryStr)
		setSkip(0)
		setItems([])
	}
	return (
		<>
			<SearchForm setQuery={handleChangeQuery} />

			{query && <h1>Current query: {query}</h1>}

			{totalItems ? (
				<h2>
					Total posts: {items.length}/{totalItems}
				</h2>
			) : null}

			{/* Показує помилку, коли трапилась проблема з завантаженням */}
			{error && <Error />}

			<PostList items={items} showPost={showPost} />

			{/* Показує лоадер, коли нема завантаження та немає помилки */}
			{loading && !error && <Loader />}

			{/* Показується кнопка підгрузки, тоді, коли немає завантаження а також кількість елементів в стейті менше за кількість даних з запиту */}
			{!loading && items.length < totalItems && (
				<button onClick={handleLoadMore} className='btn border'>
					Load more
				</button>
			)}

			{isOpen && (
				<Modal title={content.title} closeModal={closeModal}>
					<p>{content.body}</p>
					<h2>Tags</h2>
					<ol className={s.tags}>
						{content.tags.map(tag => (
							<li key={tag}>{tag}</li>
						))}
					</ol>
					<p>Likes count: {content.reactions}</p>
				</Modal>
			)}
		</>
	)
}

export default App
