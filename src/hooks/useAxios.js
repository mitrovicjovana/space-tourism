import { useState, useEffect } from 'react'
import { getData } from '../api/axios'

const useAxios = path => {
   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      getData(path).then(res => {
         setData(res.data)
         setIsLoading(false)
      })
   }, [])

   return [data, isLoading]
}

export default useAxios
