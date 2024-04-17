import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Todos from './pages/Todos'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import { useDispatch } from 'react-redux'
import { refreshThunk } from './redux/auth/operations'
import { useEffect } from 'react'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='todos' element={<Todos />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
