import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout, selectAuthorName, selectIsLoggedIn, selectUser } from '../redux/authSlice'
import { Search } from './Search'
const Header = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const dispatch = useDispatch()
	const userName = useSelector(selectAuthorName)
	return (
		<header className='header'>
			<Link to='/' className='link'>
				Redux Forum
			</Link>
			<Search />
			{isLoggedIn && (
				<div>
					<p>{userName}</p> |
					<Link to='/createTopic' className='link'>
						Create Topic
					</Link>
					<button className='btn border' onClick={() => dispatch(logout())}>
						Logout
					</button>
				</div>
			)}
			{!isLoggedIn && (
				<nav>
					<Link to='/login' className='link'>
						Login
					</Link>
					|
					<Link to='/register' className='link'>
						Register
					</Link>
				</nav>
			)}
		</header>
	)
}

export default Header
