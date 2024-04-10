import { createStore, combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { todosReducer } from './todolist/reducer'

const enhancer = devToolsEnhancer()

const rootReducer = combineReducers({
	todos: todosReducer,
	counter: counterReducer,
})

export const store = createStore(rootReducer, enhancer)
