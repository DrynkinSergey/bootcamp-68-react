import { useDispatch } from 'react-redux'
import { changeSearchStr } from '../../redux/books/actions'
const SearchBar = ({ searchStr }) => {
	const dispatch = useDispatch()
	return (
		<div>
			<input
				value={searchStr}
				onChange={e => dispatch(changeSearchStr(e.target.value))}
				type='text'
				className='input'
				placeholder='Enter book name or author...'
			/>
			{searchStr && (
				<button className='btn border' onClick={() => dispatch(changeSearchStr(''))}>
					Reset
				</button>
			)}
		</div>
	)
}

export default SearchBar
