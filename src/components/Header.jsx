import { Link } from 'react-router-dom'
const Header = () => {
	return (
		<header className='header'>
			<Link to='/' className='link'>
				Redux Forum
			</Link>
			<Link to='/createTopic' className='link'>
				Create Topic
			</Link>
		</header>
	)
}

export default Header
