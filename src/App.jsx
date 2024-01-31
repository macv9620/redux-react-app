import { Box } from '@mui/material'
import './App.css'
import { CardList } from './components/CardList'
import { Searcher } from './components/Searcher'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Loader } from './components/Loader'
import { fetchItemsWithDetails } from './slices/dataSlice'

function App () {
  const { items } = useSelector((state) => state.data, shallowEqual)
  console.log(items)
  const { showLoader } = useSelector((state) => state.ui)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItemsWithDetails())
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
