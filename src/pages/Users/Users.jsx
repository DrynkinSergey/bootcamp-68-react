import { useEffect, useState } from 'react'
import s from './Users.module.css'
import { fetchUsers } from '../../services/api'
import { Link } from 'react-router-dom'
const Users = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		fetchUsers().then(data => setUsers(data))
	}, [])
	return (
		<div className={s.users}>
			<h1 className={s.title}>Users page</h1>
			<ol className={s.list}>
				{users.map(user => (
					<li key={user.id} className={s.item}>
						{/* https://localhost:3000/users/1 */}
						{/* https://localhost:3000/users/25 */}
						<Link to={user.id.toString()}>
							{user.firstName} {user.lastName}
						</Link>
					</li>
				))}
			</ol>
		</div>
	)
}

export default Users
