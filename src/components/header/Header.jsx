import PropTypes from 'prop-types'

const Header = ({ logoText }) => {
	return (
		<header>
			<div>
				<h1>{logoText}</h1>
			</div>
			<hr />
		</header>
	)
}

Header.propTypes = {
	logoText: PropTypes.string.isRequired,
}

export default Header
