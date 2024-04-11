import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	counter: 0,
	step: 1,
}

const slice = createSlice({
	name: 'counter',
	initialState,
	selectors: {
		selectCounter: state => state.counter,
		selectStep: state => state.step,
	},
	reducers: {
		increment: (state, { payload }) => {
			state.counter += state.step
		},
		decrement: state => {
			state.counter -= state.step
		},
		reset: state => {
			state.counter = 0
			state.step = 1
		},
		changeStep: (state, { payload }) => {
			state.step = payload
		},
	},
})

export const counterReducer = slice.reducer
export const { increment, decrement, reset, changeStep } = slice.actions
export const { selectCounter, selectStep } = slice.selectors
