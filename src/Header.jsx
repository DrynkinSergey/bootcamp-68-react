import React, { useContext } from 'react'
import { UserContext } from './context/ContextProvider'

export const Header = () => {
	const { user, logout } = useContext(UserContext)
	return (
		<div className='header flexHeader'>
			<h1>{user}</h1>
			<button onClick={logout}>Exit</button>
		</div>
	)
}
