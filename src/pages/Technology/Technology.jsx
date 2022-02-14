import { useState } from 'react'
import { Spaceship } from '../../components'
import './technology.scss'

import { technology } from '../../assets/data'

const Technology = () => {
   const [activeSlide, setActiveSlide] = useState(0)

   const changeActiveSlide = active => {
      setActiveSlide(active)
   }

   return (
      <section className="technology">
         <div className="page-heading">
            <h5 className="heading">
               <span>03</span>
               Space launch 101
            </h5>
         </div>
         {technology.map(({ name, images, description, isActive }, index) => (
            <Spaceship
               key={index}
               name={name}
               images={images}
               description={description}
               isActive={index === activeSlide}
            >
               {technology.map((_, order) => (
                  <button
                     key={order}
                     className={`technology__number${order === activeSlide ? ' active' : ''}`}
                     onClick={() => changeActiveSlide(order)}
                  >
                     {order + 1}
                  </button>
               ))}
            </Spaceship>
         ))}
      </section>
   )
}

export default Technology
