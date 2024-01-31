import { combineReducers } from 'redux'
import { dataSliceReducer } from '../../slices/dataSlice'
import { uiSliceReducer } from '../../slices/uiSlice'

const rootReducer = combineReducers({
  data: dataSliceReducer,
  ui: uiSliceReducer
})

export { rootReducer }
