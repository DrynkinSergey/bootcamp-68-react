import { createSelector, createSlice } from '@reduxjs/toolkit'
import { fetchNotes } from './operations'

const initialState = {
	notes: [],
}

const slice = createSlice({
	name: 'notes',
	initialState,
	selectors: {
		selectNotes: state => state.notes,
	},
	extraReducers: builder => {
		builder.addCase(fetchNotes.fulfilled, (state, { payload }) => {
			state.notes = payload
		})
	},
})

export const notesReducer = slice.reducer
export const { selectNotes } = slice.selectors

export const selectTags = createSelector([selectNotes], notes => {
	return [...new Set(notes.map(note => note.tags).flat())]
})
