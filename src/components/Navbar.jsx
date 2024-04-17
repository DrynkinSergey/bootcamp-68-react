import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='navbar'>
			<Link to='/'>React Auth</Link>
			<p>TestUser@mail.com</p>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/todos'>Todos</NavLink>
				</li>
				<li>
					<NavLink to='/login'>Login</NavLink>
				</li>
				<li>
					<NavLink to='/register'>Register</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
