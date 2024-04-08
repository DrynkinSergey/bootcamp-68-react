import { Routes, Route, Link } from 'react-router-dom'
const App = () => {
	return (
		<div>
			{/* <a href='/'>Home</a>
			<a href='/about'>About</a> */}
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Routes>
				<Route path='/' element={<h1>Home</h1>} />
				<Route path='/about' element={<h1>About</h1>} />

				<Route path='*' element={<h1>Not found</h1>} />
			</Routes>
		</div>
	)
}

export default App
