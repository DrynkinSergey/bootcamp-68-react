const SearchBar = ({ searchStr, setSearch }) => {
	return (
		<div>
			<input
				value={searchStr}
				onChange={e => setSearch(e.target.value)}
				type='text'
				className='input'
				placeholder='Enter book name or author...'
			/>
			{searchStr && (
				<button className='btn border' onClick={() => setSearch('')}>
					Reset
				</button>
			)}
		</div>
	)
}

export default SearchBar
