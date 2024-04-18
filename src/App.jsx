import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Suspense, lazy, useEffect } from 'react'

import Layout from './components/Layout'
import Loader from './components/Loader'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

import { refreshThunk } from './redux/auth/operations'
import { selectIsRefreshing } from './redux/auth/slice'

const Todos = lazy(() => import('./pages/Todos'))
const Forum = lazy(() => import('./pages/Forum'))
const ForumInfo = lazy(() => import('./pages/ForumInfo'))
const Register = lazy(() => import('./pages/Register'))
const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))

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
		<Suspense fallback={null}>
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
		</Suspense>
	)
}

export default App
