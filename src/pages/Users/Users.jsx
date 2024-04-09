import { Link, useLocation } from 'react-router-dom'

import { useHttp } from '../../hooks/useHttp'
import { fetchUsers } from './../../services/api'
import s from './Users.module.css'
const Users = () => {
	const [users] = useHttp(fetchUsers)
	const location = useLocation()
	console.log(location)

	return (
		<div className={s.users}>
			<h1 className={s.title}>Users page</h1>
			<ol className={s.list}>
				{users?.map(user => (
					<li key={user.id} className={s.item}>
						<Link to={user.id.toString()} state={{ from: location }}>
							{user.firstName} {user.lastName}
						</Link>
					</li>
				))}
			</ol>
		</div>
	)
}

export default Users
