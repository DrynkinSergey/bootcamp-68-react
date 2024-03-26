import PropTypes from 'prop-types'
import s from './Header.module.css'
const Header = ({ logoText }) => {
	return (
		<header className='header'>
			<div>
				<h1 className={s.title}>{logoText}</h1>
			</div>
			<hr />
		</header>
	)
}

Header.propTypes = {
	logoText: PropTypes.string.isRequired,
}

export default Header
