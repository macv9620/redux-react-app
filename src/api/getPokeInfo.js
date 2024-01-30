import axios from 'axios'

const getPokeInfo = (url) => {
  return axios.get(url)
}

export { getPokeInfo }
