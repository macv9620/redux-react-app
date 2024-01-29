import { Box } from '@mui/material'
import './App.css'
import { CardList } from './components/CardList'
import { Searcher } from './components/Searcher'
import { useEffect } from 'react'
import { getItems } from './api/getItems'
import { useDispatch, useSelector } from 'react-redux'
import { setItemsAction } from './redux/actions/actions'

function App () {
  // const [items, setItems] = useState([])

  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  useEffect(() => {
    getItems()
      .then(res => dispatch(setItemsAction(res.data.results)))
      .catch(e => console.log(e))
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
