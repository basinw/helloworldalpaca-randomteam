import axios from 'axios'

let instance = axios.create({
  baseURL: `//localhost:3003/api/v1`
})

export default instance
