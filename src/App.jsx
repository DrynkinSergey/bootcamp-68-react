import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { CreateTopic } from './pages/CreateTopic'
import { Topic } from './pages/Topic'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from './redux/authSlice'
import { EditTopic } from './pages/EditTopic'

const App = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	return (
		<Routes>
			<Route path='/' element={isLoggedIn ? <Layout /> : <Login />}>
				<Route index element={<Home />} />
				<Route path='createTopic' element={<CreateTopic />} />
				<Route path='topic/:topicTitle' element={<Topic />} />
				<Route path='topic/:topicTitle/edit' element={<EditTopic />} />
			</Route>
			<Route path='*' element={<NotFound />}></Route>
			<Route path='register' element={<Register />} />
			<Route path='login' element={<Login />} />
		</Routes>
	)
}

export default App
