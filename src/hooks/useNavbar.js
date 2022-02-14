import { useContext } from 'react'
import NavbarContext from '../store/NavbarContext'

const useNavbar = () => {
   return useContext(NavbarContext)
}

export default useNavbar
