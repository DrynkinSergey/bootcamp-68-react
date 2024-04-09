import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import Company from './components/nestedComponents/Company'
import Team from './components/nestedComponents/Team'
import Career from './components/nestedComponents/Career'
import News from './pages/News/News'
import NewDetails from './pages/NewDetails/NewDetails'

import { useHttp } from './hooks/useHttp'
import { useToggle } from './hooks/useToggle'
import { fetchCommentByUserId } from './services/api'

const Users = lazy(() => import('./pages/Users/Users'))
const About = lazy(() => import('./pages/About'))
const UserDetails = lazy(() => import('./pages/UserDetails/UserDetails'))
const Bio = lazy(() => import('./components/nestedComponents/Bio'))
const Posts = lazy(() => import('./components/nestedComponents/Posts'))
const Comments = lazy(() => import('./components/nestedComponents/Comments'))
const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />

				<Route path='about' element={<About />}>
					<Route index element={<h2>Обери маршрут вище по посиланням</h2>} />
					<Route path='company' element={<Company />} />
					<Route path='team' element={<Team />} />
					<Route path='career' element={<Career />} />
				</Route>
				<Route path='users' element={<Users />} />
				<Route path='news' element={<News />} />
				<Route path='news/:newsId' element={<NewDetails />} />

				<Route path='users/:userId' element={<UserDetails />}>
					<Route path='bio' element={<Bio />} />
					<Route path='posts' element={<Posts />} />
					<Route path='comments' element={<Comments />} />
				</Route>
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
