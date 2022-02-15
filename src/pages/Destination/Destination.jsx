import { useState } from 'react'
import { useAxios } from '../../hooks'
import { PATH } from '../../router'
import { Planet } from '../../components'
import './destination.scss'

const Destination = () => {
   const destinations = useAxios(PATH.destination)

   const [activeTab, setActiveTab] = useState(0)

   const changeActiveTab = active => {
      setActiveTab(active)
   }

   return (
      <section className="destination">
         <div className="page-heading">
            <h5 className="heading">
               <span>01</span>
               Pick your destination
            </h5>
         </div>
         <div className="wrapper">
            {destinations.map(({ name, image, description, distance, travelTime }, index) => (
               <Planet
                  key={index}
                  name={name}
                  image={image}
                  description={description}
                  distance={distance}
                  travelTime={travelTime}
                  isActive={index === activeTab}
               >
                  <div className="destination__list">
                     {destinations.map(({ name }, index) => (
                        <button
                           key={index}
                           className={`destination__list-item nav-item${
                              index === activeTab ? ' active' : ''
                           }`}
                           onClick={() => changeActiveTab(index)}
                        >
                           {name}
                        </button>
                     ))}
                  </div>
               </Planet>
            ))}
         </div>
      </section>
   )
}

export default Destination
