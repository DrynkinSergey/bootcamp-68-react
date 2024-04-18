import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Suspense } from 'react'

const Layout = () => {
	return (
		<div>
			<Navbar />
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default Layout
