import { Box } from '@mui/material'
import './App.css'
import { CardList } from './components/CardList'
import { Searcher } from './components/Searcher'
import { useEffect } from 'react'
import { getItems } from './api/getItems'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPokeWithDetails, setShowLoader } from './redux/actions/actions'
import { Loader } from './components/Loader'

function App () {
  const { items } = useSelector((state) => state.data, shallowEqual)
  const { showLoader } = useSelector((state) => state.ui)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setShowLoader(true))
    const fetchData = async () => {
      try {
        const res = await getItems()
        const pokes = res.data.results

        dispatch(getPokeWithDetails(pokes))
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <Searcher />
      {showLoader && <Loader />}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <CardList items={items} />
      </Box>
    </div>
  )
}

export default App
