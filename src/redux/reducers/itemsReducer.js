import { SET_ITEMS } from '../actions/types'

const initialState = {
  items: []
}

const itemsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...currentState, items: action.payload }
    default:
      return currentState
  }
}

export { itemsReducer }
