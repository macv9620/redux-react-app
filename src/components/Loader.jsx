import * as React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

const Loader = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress color="success" />
    </Box>
  )
}

export { Loader }
