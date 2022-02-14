import { useState, useEffect, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import { PATH } from '../router'

const NavbarContext = createContext({
   homeClassName: '',
   isHomeOpened: false,
   openNavHome: () => {},
})

const NavbarProvider = ({ children }) => {
   const [isHomeOpened, setIsHomeOpened] = useState(false)
   const [homeClassName, setHomeClassName] = useState('')
   const [didOpenNav, setDidOpenNav] = useState(false)

   const { pathname } = useLocation()

   useEffect(() => {
      setHomeClassName(getHomeClass)
   }, [isHomeOpened, pathname])

   const getHomeClass = () => {
      if (pathname === PATH.home) {
         if (isHomeOpened) {
            if (!didOpenNav) {
               setDidOpenNav(true)
               return ' home-opened'
            } else return ''
         } else {
            return ' home-collapsed'
         }
      }
      return ''
   }

   const openNavHome = () => {
      setIsHomeOpened(true)
   }

   const context = {
      homeClassName,
      openNavHome,
   }

   return <NavbarContext.Provider value={context}>{children}</NavbarContext.Provider>
}

export default NavbarContext
export { NavbarProvider }
