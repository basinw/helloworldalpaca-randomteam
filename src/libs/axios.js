import axios from 'axios'

let instance = axios.create({
  baseURL: `https://random.helloworld.itbangmod.in.th/api/v1`
})

export default instance
