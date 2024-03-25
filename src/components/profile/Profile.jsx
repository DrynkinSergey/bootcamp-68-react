const Profile = ({ user }) => {
	const { lastName, firstName, age, email, image, address } = user
	return (
		<div>
			<img width='200' src={image} alt='user avatar' />
			<h1>
				{firstName} {lastName}
			</h1>
			<p>Email: {email}</p>
			<p>Age: {age}</p>
			<p>Status: {age > 18 ? 'Adult' : 'Young'}</p>
			<p>Address: {address.city}</p>
		</div>
	)
}

export default Profile
