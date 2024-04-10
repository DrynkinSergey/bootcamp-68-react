import { createStore, combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { todosReducer } from './todolist/reducer'
import { booksReducer } from './books/reducer'

const enhancer = devToolsEnhancer()

const rootReducer = combineReducers({
	todos: todosReducer,
	counter: counterReducer,
	books: booksReducer,
})

export const store = createStore(rootReducer, enhancer)
