import axios from 'axios'

let instance = axios.create({
  baseURL: `//random.helloworld.itbangmod.in.th/api/v1`
})

export default instance
