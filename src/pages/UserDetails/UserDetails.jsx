import { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useNavigate, useParams, useLocation } from 'react-router-dom'
import { fetchUsersById } from '../../services/api'
import { useHttp } from '../../hooks/useHttp'
const UserDetails = () => {
	const { userId } = useParams()
	const navigate = useNavigate()
	const location = useLocation()
	const goBackRef = useRef(location.state?.from)

	useEffect(() => {
		console.log(location)
		console.log(goBackRef.current)
	}, [location])
	const [user] = useHttp(fetchUsersById, userId)

	if (!user) {
		return <h2>Loading...</h2>
	}

	return (
		<div>
			<Link to={goBackRef.current}>Back</Link>
			<h2>UserDetails #{userId}</h2>
			<div className='userDetails'>
				<div>
					<img src={user.image} alt={user.firstName} />
					<h1>
						{user.firstName} {user.lastName}
					</h1>
					<p>Email:{user.email}</p>
					<p>Age:{user.age}</p>
					<p>Adress:{user.address.city}</p>
					<Link to='bio'>Biography</Link>
					<Link to='posts'>Show user posts</Link>
					<Link to='comments'>Show user comments</Link>
				</div>
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default UserDetails
