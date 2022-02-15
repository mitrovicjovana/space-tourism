import axios from 'axios'

axios.defauls.baseURL = 'https://space-tourism-server.herokuapp.com/api/'

export const getData = path => axios(path)
