import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box } from '@mui/material'

const ItemCard = ({ name, image, abilities }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader='September 14, 2016'
      />
      <CardMedia
        component='img'
        height='194'
        alt='error'
        src={image}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          Abilities: {abilities}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Box>

    </Card>
  )
}

export { ItemCard }
