import { SET_SHOW_LOADER } from '../actions/types'

const initialState = {
  showLoader: false
}

const uiReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_LOADER:
      return { ...currentState, showLoader: action.payload }
    default:
      return currentState
  }
}

export { uiReducer }
