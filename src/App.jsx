import { Box } from '@mui/material'
import './App.css'
import { CardList } from './components/CardList'
import { Searcher } from './components/Searcher'
import { useEffect, useState } from 'react'
import { getItems } from './api/getItems'

function App () {
  const [items, setItems] = useState([])
  useEffect(() => {
    getItems()
      .then(res => setItems(res.data.results))
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
