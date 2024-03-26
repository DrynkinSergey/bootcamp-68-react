import PropTypes from 'prop-types'
import css from './Profile.module.css'
const Profile = ({ user, message }) => {
	const { lastName, firstName, age, email, image, address } = user

	return (
		<div>
			{message && <h1>Hello {firstName}</h1>}
			<img width='200' src={image} alt='user avatar' />
			<h1 className={css.title_red}>
				{firstName} {lastName}
			</h1>
			<p>Email: {email}</p>
			<p>Age: {age}</p>
			<p>Gender: {user.gender}</p>

			<p>Status: {age > 18 ? 'Adult' : 'Young'}</p>
			<p>Address: {address.city}</p>
		</div>
	)
}

// { lastName, firstName, age, email, image, address }
Profile.propTypes = {
	message: PropTypes.string,
	user: PropTypes.shape({
		lastName: PropTypes.string.isRequired,
		firstName: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		email: PropTypes.string.isRequired,
		gender: PropTypes.oneOf(['male', 'female']),
		image: PropTypes.string.isRequired,
		address: PropTypes.shape({
			city: PropTypes.string.isRequired,
		}),
	}),
}

export default Profile
