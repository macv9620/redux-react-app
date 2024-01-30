import { getPokeInfo } from '../../api/getPokeInfo'
import { SET_ITEMS } from './types'

const setItemsAction = (items) => ({
  type: SET_ITEMS,
  payload: items
}
)

const getPokeWithDetails = (pokes = []) => async (dispatch) => {
  const promises = pokes.map(async (poke) => {
    const res = await getPokeInfo(poke.url)
    return res.data
  })

  const updatedItems = await Promise.all(promises)

  console.log(updatedItems)

  dispatch(setItemsAction(updatedItems))
}

export { setItemsAction, getPokeWithDetails }
