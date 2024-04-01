export const Filters = ({ searchStr, activeSkill, isAvailable, onChangeSearch, onChangeAvailable, onChangeSkill }) => {
	const skill_list = ['all', 'react', 'angular', 'vue']
	return (
		<div>
			<h1>Filters</h1>
			<form>
				<label>
					<input
						className='input'
						value={searchStr}
						onChange={e => onChangeSearch(e.target.value)}
						type='text'
						placeholder='Search employee...'
					/>
				</label>
				<label>
					<input checked={isAvailable} onChange={() => onChangeAvailable(prev => !prev)} type='checkbox' />
					Show isOpenToWork
				</label>

				<div>
					{skill_list.map(skill => (
						<label key={skill}>
							<input
								type='radio'
								onChange={() => onChangeSkill(skill)}
								value={skill}
								checked={skill === activeSkill}
								name='skills'
							/>
							{skill}
						</label>
					))}
				</div>
			</form>
		</div>
	)
}
