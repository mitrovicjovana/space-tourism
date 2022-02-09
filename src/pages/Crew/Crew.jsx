import { useState, useEffect } from 'react'
import { CrewMember } from '../../components'
import './crew.scss'

import { crew } from '../../assets/data'

const Crew = () => {
   const [activeSlide, setActiveSlide] = useState(0)

   useEffect(() => {
      const time = setInterval(() => {
         activeSlide === crew.length - 1
            ? setActiveSlide(0)
            : setActiveSlide(prevSlide => prevSlide + 1)
      }, 7000)

      return () => clearInterval(time)
   }, [activeSlide])

   const changeActiveSlide = active => {
      setActiveSlide(active)
   }

   return (
      <section className="crew">
         <div className="wrapper">
            <h5 className="page-heading heading">
               <span>02</span>
               Meet your crew
            </h5>
            {crew.map(({ name, image, role, bio }, index) => (
               <CrewMember
                  key={index}
                  name={name}
                  image={image}
                  role={role}
                  bio={bio}
                  isActive={index === activeSlide}
               >
                  {crew.map((_, order) => (
                     <button
                        key={order}
                        className={`dot${order === activeSlide ? ' active' : ''}`}
                        onClick={() => {
                           changeActiveSlide(order)
                        }}
                     />
                  ))}
               </CrewMember>
            ))}
         </div>
      </section>
   )
}

export default Crew
