import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { selectIsLoggedIn, selectUser } from '../redux/auth/slice'
import { logoutThunk } from '../redux/auth/operations'

const Navbar = () => {
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const isLoggedIn = useSelector(selectIsLoggedIn)
	return (
		<div className='navbar'>
			<Link to='/'>React Auth</Link>
			<p>{user.email}</p>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/todos'>Todos</NavLink>
				</li>
				{!isLoggedIn && (
					<>
						<li>
							<NavLink to='/login'>Login</NavLink>
						</li>
						<li>
							<NavLink to='/register'>Register</NavLink>
						</li>
					</>
				)}
				{isLoggedIn && (
					<button onClick={() => dispatch(logoutThunk())} className='btn border'>
						Logout
					</button>
				)}
			</ul>
		</div>
	)
}

export default Navbar
