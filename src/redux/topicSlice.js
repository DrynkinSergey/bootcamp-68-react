import { createSlice, nanoid } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
	items: [],
	query: '',
}

const slice = createSlice({
	name: 'topic',
	initialState,
	selectors: {
		selectFilteredData: state => {
			if (!state.query) {
				return state.items
			}
			return state.items.filter(
				topic =>
					topic.title.toLowerCase().includes(state.query.toLowerCase()) ||
					topic.desc.toLowerCase().includes(state.query.toLowerCase())
			)
		},
		selectTopics: state => state.items,
		selectTopicByTitle: (state, title) => state.items.find(topic => topic.title === title),
	},
	reducers: {
		addTopic: {
			prepare: ({ title, desc, tag, author }) => {
				return {
					payload: {
						id: nanoid(),
						title,
						desc,
						tag,
						author,
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
		editTopic: (state, action) => {
			const topicIndex = state.items.findIndex(topic => topic.id === action.payload.id)
			state.items[topicIndex] = action.payload
		},
		deleteTopic: (state, action) => {
			state.items = state.items.filter(topic => topic.id !== action.payload)
		},
		deleteComment: (state, action) => {
			const topic = state.items.find(topic => topic.id === action.payload.topicId)
			topic.comments = topic.comments.filter(comment => comment.id !== action.payload.commentId)
		},
		changeQuery: (state, action) => {
			state.query = action.payload
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

export const {
	addTopic,
	increaseViews,
	increaseLikeCount,
	increaseDisLikeCount,
	addComment,
	editTopic,
	deleteTopic,
	deleteComment,
	changeQuery,
} = slice.actions
export const { selectTopics, selectTopicByTitle, selectFilteredData } = slice.selectors
export const topicReducer = slice.reducer
