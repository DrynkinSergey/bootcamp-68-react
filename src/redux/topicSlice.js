import { createSlice, nanoid } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
	items: [],
}

const slice = createSlice({
	name: 'topic',
	initialState,
	selectors: {
		selectTopics: state => state.items,
		selectTopicByTitle: (state, title) => state.items.find(topic => topic.title === title),
	},
	reducers: {
		addTopic: {
			prepare: ({ title, desc, tag }) => {
				return {
					payload: {
						id: nanoid(),
						title,
						desc,
						tag,
						author: 'admin',
						createdAt: moment().format('DD-MM-YYYY HH:mm:ss'),
						views: 0,
						likes: 0,
						dislikes: 0,
						comments: [],
					},
				}
			},
			reducer: (state, action) => {
				state.items.push(action.payload)
			},
		},
		increaseViews: (state, action) => {
			const topic = state.items.find(topic => topic.id === action.payload)
			topic.views++
		},
		increaseLikeCount: (state, action) => {
			const topic = state.items.find(topic => topic.id === action.payload)
			topic.likes++
		},
		increaseDisLikeCount: (state, action) => {
			const topic = state.items.find(topic => topic.id === action.payload)
			topic.dislikes++
		},
		addComment: (state, action) => {
			const topic = state.items.find(topic => topic.id === action.payload.id)
			topic.comments.push(action.payload.comment)
		},
	},
})

export const { addTopic, increaseViews, increaseLikeCount, increaseDisLikeCount, addComment } = slice.actions
export const { selectTopics, selectTopicByTitle } = slice.selectors
export const topicReducer = slice.reducer
