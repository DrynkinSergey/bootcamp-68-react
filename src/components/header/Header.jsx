import PropTypes from 'prop-types'

const Header = ({ logoText }) => {
	const styles = { backgroundColor: 'teal', color: 'white', fontWeight: 'bold' }
	return (
		<header style={styles}>
			<div>
				<h1 style={{ fontStyle: 'italic', fontSize: '1.5rem' }}>{logoText}</h1>
			</div>
			<hr />
		</header>
	)
}

Header.propTypes = {
	logoText: PropTypes.string.isRequired,
}

export default Header
