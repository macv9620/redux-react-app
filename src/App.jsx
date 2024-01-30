import { Box } from '@mui/material'
import './App.css'
import { CardList } from './components/CardList'
import { Searcher } from './components/Searcher'
import { useEffect } from 'react'
import { getItems } from './api/getItems'
import { useDispatch, useSelector } from 'react-redux'
import { getPokeWithDetails, setItemsAction } from './redux/actions/actions'
import { getPokeInfo } from './api/getPokeInfo'

function App () {
  const items = useSelector((state) => state.items)
  const dispatch = useDispatch()

  useEffect(() => {
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <CardList items={items} />
      </Box>
    </div>
  )
}

export default App
