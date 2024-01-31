import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getItems } from '../api/getItems'
import { getPokeInfo } from '../api/getPokeInfo'
import { setShowLoader } from './uiSlice'

const initialState = {
  items: []
}

const fetchItemsWithDetails = createAsyncThunk(
  'data/fetchItemsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setShowLoader(true))
    const res = await getItems()
    const pokes = res.data.results

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
    dispatch(setItems(updatedItems))
    dispatch(setShowLoader(false))
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    setLikeUnlike: (state, action) => {
      const findPokeIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )

      if (findPokeIndex >= 0) {
        state.items[findPokeIndex].like = !state.items[findPokeIndex].like
      }
    }
  }
})

console.log(dataSlice)

export const { setItems, setLikeUnlike } = dataSlice.actions

export const dataSliceReducer = dataSlice.reducer

export { fetchItemsWithDetails }
