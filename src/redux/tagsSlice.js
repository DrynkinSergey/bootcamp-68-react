import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	tags: ['js', 'react', 'html', 'css', 'redux', 'other', 'movies', 'books'],
}

const slice = createSlice({
	name: 'tags',
	initialState,
	selectors: {
		selectTags: state => state.tags,
	},
	reducers: {},
})

export const tagsReducer = slice.reducer
export const { selectTags } = slice.selectors
