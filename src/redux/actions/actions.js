import { SET_ITEMS } from './types'

const setItemsAction = (items) => ({
  type: SET_ITEMS,
  payload: items
}
)

export { setItemsAction }
