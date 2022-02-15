import { useState, useEffect } from 'react'
import { getData } from '../api/axios'

const useAxios = path => {
   const [data, setData] = useState([])

   useEffect(() => {
      getData(path)
         .then(res => setData(res))
         .catch(err => console.log(err))
   }, [])

   return data
}

export default useAxios
