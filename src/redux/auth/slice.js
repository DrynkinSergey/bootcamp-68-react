import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: '',
	isLoggedIn: false,
	isRefreshing: false,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	selectors: {
		selectIsRefreshing: state => state.isRefreshing,
		selectToken: state => state.token,
		selectUser: state => state.user,
		selectIsLoggedIn: state => state.isLoggedIn,
	},
	extraReducers: builder => {
		builder

			.addCase(logoutThunk.fulfilled, () => {
				return initialState
			})
			.addCase(refreshThunk.pending, state => {
				state.isRefreshing = true
			})
			.addCase(refreshThunk.rejected, state => {
				state.isRefreshing = false
			})
			.addCase(refreshThunk.fulfilled, (state, { payload }) => {
				state.user.name = payload.name
				state.user.email = payload.email
				state.isLoggedIn = true
				state.isRefreshing = false
			})

			.addMatcher(isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled), (state, { payload }) => {
				state.user.name = payload.user.name
				state.user.email = payload.user.email
				state.token = payload.token
				state.isLoggedIn = true
			})
	},
})

export const authReducer = slice.reducer
export const { selectToken, selectIsLoggedIn, selectUser, selectIsRefreshing } = slice.selectors
