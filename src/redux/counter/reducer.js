import { changeStep, decrement, increment, reset } from './actions'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
	counter: 0,
	step: 1,
}

export const counterReducer = createReducer(initialState, builder => {
	builder
		.addCase(increment, (state, action) => {
			state.counter += state.step
		})
		.addCase(decrement, (state, action) => {
			state.counter -= state.step
		})
		.addCase(reset, (state, action) => {
			state.counter = 0
			state.step = 1
		})
		.addCase(changeStep, (state, { payload }) => {
			state.step = payload
		})
})

// export const counterReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case increment.type:
// 			return {
// 				...state,
// 				counter: state.counter + state.step,
// 			}
// 		case decrement.type:
// 			return {
// 				...state,
// 				counter: state.counter - state.step,
// 			}
// 		case reset.type:
// 			return initialState

// 		case changeStep.type:
// 			return {
// 				...state,
// 				step: action.payload,
// 			}

// 		default:
// 			return state
// 	}
// }
