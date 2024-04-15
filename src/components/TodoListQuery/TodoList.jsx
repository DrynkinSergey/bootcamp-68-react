import s from './TodoList.module.css'

import Filter from './Filter'
import AddForm from './AddForm'
import ItemsList from './ItemsList'

export const TodoList = () => {
	return (
		<section className={s.wrapper}>
			<AddForm />
			<Filter />
			<ItemsList data={[]} />
		</section>
	)
}
