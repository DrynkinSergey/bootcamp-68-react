import s from './TodoList.module.css'

const OptionsBtns = ({ handleDeleteAll, handleDeleteSelected }) => {
	return (
		<div className={s.optionsBtns}>
			<button onClick={handleDeleteSelected} className='btn border'>
				Delete Selected
			</button>
			<button onClick={handleDeleteAll} className='btn border'>
				Delete all
			</button>
		</div>
	)
}

export default OptionsBtns
