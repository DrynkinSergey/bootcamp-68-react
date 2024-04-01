import { useState } from 'react'
import usersData from '../../assets/users.json'
import List from './List'
import { Filters } from './Filters'

const Employees = () => {
	const [users, setUsers] = useState(usersData)
	const [searchStr, setSearchStr] = useState('')
	const [isAvailable, setIsAvailable] = useState(false)
	const [activeSkill, setActiveSkill] = useState('all')

	const handleDeleteUser = id => {
		console.log(id)
		setUsers(prev => prev.filter(item => item.id !== id))
	}

	const handleUpdateBio = id => {
		setUsers(prev =>
			prev.map(item =>
				item.id === id ? { ...item, bio: prompt('Enter new bio:'), email: 'updatedMail@mail.com' } : item
			)
		)
	}

	const getFilteredData = () => {
		return users
			.filter(user => user.name.toLowerCase().includes(searchStr.toLowerCase()))
			.filter(user => (isAvailable === false ? user : user.isOpenToWork))
			.filter(user => (activeSkill === 'all' ? user : user.skills.includes(activeSkill)))
	}

	const filteredData = getFilteredData()

	return (
		<div>
			<Filters
				searchStr={searchStr}
				isAvailable={isAvailable}
				activeSkill={activeSkill}
				onChangeSkill={setActiveSkill}
				onChangeAvailable={setIsAvailable}
				onChangeSearch={setSearchStr}
			/>
			{/* <h1>{searchStr}</h1> */}
			<List users={filteredData} onDelete={handleDeleteUser} onUpdate={handleUpdateBio} />
		</div>
	)
}

export default Employees
