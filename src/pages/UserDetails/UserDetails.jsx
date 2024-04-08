import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { fetchUsersById } from '../../services/api'
const UserDetails = () => {
	const { userId } = useParams()

	const [user, setUser] = useState(null)

	useEffect(() => {
		fetchUsersById(userId).then(data => setUser(data))
	}, [userId])

	if (!user) {
		return <h2>Loading...</h2>
	}

	return (
		<div>
			<Link to='/users'>Back</Link>
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
				</div>
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default UserDetails
