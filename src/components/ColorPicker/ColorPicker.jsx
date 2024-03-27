import s from './ColorPicker.module.css'
import colors from '../../assets/colors.json'
import { useState } from 'react'
export const ColorPicker = () => {
	const [currentColor, setCurrentColor] = useState(colors[0].color)
	return (
		<section style={{ backgroundColor: currentColor }} className={s.bgWrapper}>
			<div className={s.pallette}>
				<h1>Selected color: {currentColor}</h1>
				<ul className={s.list}>
					{colors.map(item => (
						<li onClick={() => setCurrentColor(item.color)} className={s.item} key={item.id}>
							{item.color}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
