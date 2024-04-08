import s from './Users.module.css'
import { Link } from 'react-router-dom'
import { useHttp } from '../../hooks/useHttp'
import { fetchUsers } from './../../services/api'
const Users = () => {
	const [users] = useHttp(fetchUsers)

	return (
		<div className={s.users}>
			<h1 className={s.title}>Users page</h1>
			<ol className={s.list}>
				{users?.map(user => (
					<li key={user.id} className={s.item}>
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
