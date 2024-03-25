import Button from '../Button/Button'

const List = ({ title = 'Default section', data, online }) => {
	return (
		<section>
			<h2>{title}</h2>
			<h2>{online && 'Props from app'}</h2>
			<hr />
			<ul>
				{data.map(item => (
					<li key={item.id}>
						<span>{item.title}</span>
						<Button title='Edit' />
						<Button title='Delete' />
					</li>
				))}
			</ul>
		</section>
	)
}

export default List
