import Button from '../Button/Button'
import s from './List.module.css'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'

const List = ({ title = 'Default section', data, online }) => {
	return (
		<section>
			<h2>{title}</h2>
			<h2>{online && 'Props from app'}</h2>
			<hr />
			<ul className={s.list}>
				{data.map(item => (
					<li className={s.item} key={item.id}>
						<span>{item.title}</span>
						<div className={s.btn_wrapper}>
							<Button title='Edit'>
								<FaEdit className={s.editIcon} /> Edit
							</Button>
							<Button title='Delete'>
								<MdDeleteOutline />
								Delete
							</Button>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export default List
