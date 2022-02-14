import { useState } from 'react'

const useToggle = () => {
   const [isOpened, setIsOpened] = useState(false)
   const [className, setClassName] = useState('header__nav--collapsed')

   const toggleNav = () => {
      if (isOpened) {
         setIsOpened(false)
         setClassName(prev => `${prev} collapsing`)
         setTimeout(() => {
            setClassName('header__nav--collapsed')
         }, 1200)
      } else {
         setIsOpened(true)
         setClassName('header__nav--opened')
      }
   }

   return [className, toggleNav, isOpened]
}

export default useToggle
