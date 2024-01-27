import axios from 'axios'

const getItems = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
}

export { getItems }
