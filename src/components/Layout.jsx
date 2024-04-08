import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
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
