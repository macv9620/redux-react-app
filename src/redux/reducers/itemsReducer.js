import { SET_ITEMS, SET_LIKE_UNLIKE } from '../actions/types'

const initialState = {
  items: []
}

const itemsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...currentState, items: action.payload }
    case SET_LIKE_UNLIKE: {
      const stateCopy = { ...currentState }

      const findPokeIndex = stateCopy.items.findIndex((item) => item.id === action.payload)

      if (findPokeIndex === -1) {
        return stateCopy
      } else {
        stateCopy.items[findPokeIndex].like = !stateCopy.items[findPokeIndex].like
        return stateCopy
      }
    }
    default:
      return currentState
  }
}

export { itemsReducer }
