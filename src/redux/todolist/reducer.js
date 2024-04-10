import { ADD_TODO, CHANGE_FILTER, DELETE_ALL, DELETE_SELECTED, DELETE_TODO, TOGGLE_TODO } from './constants'

const initialState = {
	todos: [],
	filter: 'all',
}

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO: {
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		}
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(item => item.id !== action.payload),
			}
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
			}
		case DELETE_ALL:
			return {
				...state,
				todos: [],
			}
		case DELETE_SELECTED:
			return {
				...state,
				todos: state.todos.filter(item => !item.completed),
			}
		case CHANGE_FILTER:
			return {
				...state,
				filter: action.payload,
			}
		default:
			return state
	}
}
