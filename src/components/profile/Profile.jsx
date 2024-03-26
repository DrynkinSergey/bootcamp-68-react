import PropTypes from 'prop-types'
import s from './Profile.module.css'
import clsx from 'clsx'
const Profile = ({ user, message }) => {
	const { lastName, firstName, age, email, image, address } = user

	return (
		<div className={s.wrapper}>
			<div className={s.card}>
				{message && <h1>Hello {firstName}</h1>}
				<div className={s.img_wrapper}>
					<img width='200' src={image} alt='user avatar' />
				</div>
				<h1 className={s.name}>
					{firstName} {lastName}
				</h1>
				<p>Email: {email}</p>
				<p>Age: {age}</p>
				<p>Gender: {user.gender}</p>

				{/* <p className={`${s.status} ${age > 18 ? s.green : s.red}`}>Status: {age > 18 ? 'Adult' : 'Young'}</p> */}
				<p className={clsx(s.status, age > 18 ? s.green : s.red)}>Status: {age > 18 ? 'Adult' : 'Young'}</p>
				<p>Address: {address.city}</p>
			</div>
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
