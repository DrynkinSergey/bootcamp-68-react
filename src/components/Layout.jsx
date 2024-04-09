import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import { useEffect } from 'react'

const Layout = () => {
	const location = useLocation()
	useEffect(() => {
		document.title = location.pathname.slice(1).split('/')[0].toUpperCase()
	}, [location.pathname])
	return (
		<div>
			<Navbar />
			<section className='outlet'>
				{/* Аутлет показує де знаходяться на сторінці маршрути */}
				<Outlet />
			</section>
		</div>
	)
}

export default Layout
