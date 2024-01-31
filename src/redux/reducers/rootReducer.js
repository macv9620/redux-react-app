import { combineReducers } from 'redux'
import { itemsReducer } from './itemsReducer'
import { uiReducer } from './ui'

const rootReducer = combineReducers({
  data: itemsReducer,
  ui: uiReducer
})

export { rootReducer }
