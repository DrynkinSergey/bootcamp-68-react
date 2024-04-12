import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { CreateTopic } from './pages/CreateTopic'
import { Topic } from './pages/Topic'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='createTopic' element={<CreateTopic />} />
				<Route path='topic/:topicTitle' element={<Topic />} />
			</Route>
			<Route path='*' element={<NotFound />}></Route>
		</Routes>
	)
}

export default App
