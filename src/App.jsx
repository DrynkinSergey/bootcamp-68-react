import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import Users from './pages/Users/Users'
import UserDetails from './pages/UserDetails/UserDetails'
import Company from './components/nestedComponents/Company'
import Team from './components/nestedComponents/Team'
import Career from './components/nestedComponents/Career'
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
				<Route path='users/:userId' element={<UserDetails />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
