import PropTypes from 'prop-types'

const Modal = ({ title, children }) => {
	return (
		<div>
			<h2>{title}</h2>
			<div>{children}</div>
		</div>
	)
}

Modal.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
}
export default Modal
