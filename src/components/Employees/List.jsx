const List = ({ users, onDelete, onUpdate }) => {
	return (
		<ul>
			{users.map(user => (
				<li key={user.id}>
					<h2>{user.name}</h2>
					<p>{user.email}</p>
					<p>{user.bio}</p>
					<div>
						{user.skills.map(skill => (
							<span key={skill}>{skill}</span>
						))}
					</div>
					<button onClick={() => onUpdate(user.id)} className='btn border'>
						Update
					</button>
					<button onClick={() => onDelete(user.id)} className='btn border'>
						Delete
					</button>
				</li>
			))}
		</ul>
	)
}

export default List
