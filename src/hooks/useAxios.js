import { useState, useEffect } from 'react'
import { getData } from '../api/axios'

const useAxios = path => {
   const [data, setData] = useState([])

   useEffect(() => {
      getData(path)
         .then(res => setData(res.data))
   }, [])

   return data
}

export default useAxios
