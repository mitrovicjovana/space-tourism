import { useState, useEffect } from 'react'

const useSlider = (slides, timeInterval) => {
   const [activeSlide, setActiveSlide] = useState(0)

   useEffect(() => {
      if (timeInterval !== undefined) {
         const time = setInterval(() => {
            activeSlide === slides.length - 1
               ? setActiveSlide(0)
               : setActiveSlide(prevSlide => prevSlide + 1)
         }, timeInterval)
         return () => clearInterval(time)
      }
   }, [activeSlide])

   const changeActiveSlide = active => {
      setActiveSlide(active)
   }

   return { activeSlide, changeActiveSlide }
}

export default useSlider
