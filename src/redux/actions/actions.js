import { getPokeInfo } from '../../api/getPokeInfo'
import { SET_ITEMS, SET_LIKE_UNLIKE, SET_SHOW_LOADER } from './types'

const setItemsAction = (items) => ({
  type: SET_ITEMS,
  payload: items
}
)

const setShowLoader = (show) => ({
  type: SET_SHOW_LOADER,
  payload: show
})

const setLikeUnlike = (id) => ({
  type: SET_LIKE_UNLIKE,
  payload: id
})

const getPokeWithDetails = (pokes = []) => async (dispatch) => {
  const promises = pokes.map(async (poke) => {
    const res = await getPokeInfo(poke.url)
    const pokeDetail = res.data
    const pokeDetailWithLike = {
      ...pokeDetail,
      like: false
    }

    return pokeDetailWithLike
  })

  const updatedItems = await Promise.all(promises)

  console.log(updatedItems)

  dispatch(setItemsAction(updatedItems))
  dispatch(setShowLoader(false))
}

export { setItemsAction, getPokeWithDetails, setShowLoader, setLikeUnlike }
