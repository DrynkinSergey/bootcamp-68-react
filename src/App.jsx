import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Todos from './pages/Todos'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from './redux/auth/operations'
import { useEffect } from 'react'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import Forum from './pages/Forum'
import ForumInfo from './pages/ForumInfo'
import { selectIsRefreshing } from './redux/auth/slice'
import Loader from './components/Loader'

const App = () => {
	const dispatch = useDispatch()
	const isRefreshing = useSelector(selectIsRefreshing)
	console.log(isRefreshing)
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])

	return isRefreshing ? (
		<Loader />
	) : (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='forum' element={<Navigate to='/blog' />} />
					<Route path='blog' element={<Forum />} />
					<Route
						path='blog/info'
						element={
							<PrivateRoute>
								<ForumInfo />
							</PrivateRoute>
						}
					/>
					<Route
						path='todos'
						element={
							<PrivateRoute>
								<Todos />
							</PrivateRoute>
						}
					/>
				</Route>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>
				<Route
					path='/register'
					element={
						<PublicRoute>
							<Register />
						</PublicRoute>
					}
				/>
				{/* <Route path='*' element={<Navigate to='/' />} /> */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
