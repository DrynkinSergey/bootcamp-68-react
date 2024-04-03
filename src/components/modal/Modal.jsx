import { useEffect } from 'react'
import Button from '../Button/Button'
import s from './Modal.module.css'
const Modal = ({ children, title = 'Default modal', closeModal }) => {
	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				closeModal()
			}
		}
		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [closeModal])

	const handleBackdropClick = e => {
		if (e.target === e.currentTarget) {
			closeModal()
		}
	}

	return (
		<div className={s.wrapper} onClick={handleBackdropClick}>
			<div className={s.content}>
				<>
					<h1>{title}</h1>
					<hr />
				</>
				<Button onClick={closeModal} className={s.closeBtn}>
					×
				</Button>
				{children}
			</div>
		</div>
	)
}

export default Modal
