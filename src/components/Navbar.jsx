import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	const activeStyleLink = ({ isActive }) => {
		return clsx('link', isActive && 'active')
	}

	return (
		<header className='navbar'>
			<div>Router</div>
			<ul>
				<li>
					<NavLink className={activeStyleLink} to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink className={activeStyleLink} to='/about'>
						About
					</NavLink>
				</li>
				<li>
					<NavLink className={activeStyleLink} to='/users'>
						Users
					</NavLink>
				</li>
				<li>
					<NavLink className={activeStyleLink} to='/news'>
						News
					</NavLink>
				</li>
				<li>
					<NavLink className={activeStyleLink} to='/animations'>
						Animations
					</NavLink>
				</li>
			</ul>
		</header>
	)
}

export default Navbar
