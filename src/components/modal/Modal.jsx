import Button from '../Button/Button'
import s from './Modal.module.css'
const Modal = ({ children, title = 'Default modal' }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.content}>
				<>
					<h1>{title}</h1>
					<hr />
				</>
				<Button className={s.closeBtn}>×</Button>
				{children}
			</div>
		</div>
	)
}

export default Modal
