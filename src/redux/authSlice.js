import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
	user: null,
	isLoggedIn: false,
	usersData: [],
}

const slice = createSlice({
	name: 'auth',
	initialState,
	selectors: {
		selectUser: state => state.user,
		selectIsLoggedIn: state => state.isLoggedIn,
		selectAuthorName: state => state.usersData.find(user => user.email === state.user.email).name,
	},
	reducers: {
		register: (state, action) => {
			if (!state.usersData.find(user => user.email === action.payload.email)) {
				state.usersData.push(action.payload)
			} else {
				toast.error('Email is already in use. Please sign in with your credentials!')
			}
		},
		login: (state, action) => {
			if (
				state.usersData.find(user => user.email === action.payload.email && user.password === action.payload.password)
			) {
				state.user = action.payload
				state.isLoggedIn = true
			} else {
				toast.error('Invalid credentials!')
			}
		},
		logout: state => {
			state.user = null
			state.isLoggedIn = false
		},
	},
})

export const { login, logout, register } = slice.actions
export const { selectIsLoggedIn, selectUser, selectAuthorName } = slice.selectors
export const authReducer = slice.reducer
