import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='not_found'>
			<h1>Page not found</h1>
			<Link to='/'>Go to homepage!</Link>
		</div>
	)
}

export default NotFound
