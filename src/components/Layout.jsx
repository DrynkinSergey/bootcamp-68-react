import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import { Suspense, useEffect } from 'react'

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
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</section>
		</div>
	)
}

export default Layout
