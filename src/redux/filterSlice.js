import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	filter: '',
}

const slice = createSlice({
	name: 'filter',
	initialState,
	selectors: {
		selectFilter: state => state.filter,
	},
	reducers: {
		changeSearchStr: (state, { payload }) => {
			state.filter = payload
		},
	},
})

export const filterReducer = slice.reducer
export const { changeSearchStr } = slice.actions
export const { selectFilter } = slice.selectors
