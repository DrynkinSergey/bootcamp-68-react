import { useEffect } from 'react'
import Button from '../Button/Button'
import s from './Modal.module.css'
const Modal = ({ children, title = 'Default modal', closeModal }) => {
	useEffect(() => {
		console.log('Модалка відкрилась')
		const handleKeyDown = e => {
			console.log(e.key)
			if (e.key === 'Escape') {
				closeModal()
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		const intervalId = setInterval(() => {
			// console.log(new Date().toLocaleTimeString())
		}, 1000)

		const timeoutId = setTimeout(() => {
			console.log('Hello')
		}, 3000)

		return () => {
			console.log('Модалка закрита!')
			clearInterval(intervalId)
			clearTimeout(timeoutId)
			removeEventListener('keydown', handleKeyDown)
			console.log('Час зупинено')
		}
	}, [closeModal])

	const handleBackdropClick = e => {
		// console.log(e.target)
		// console.log(e.currentTarget)
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
