import { useState } from 'react'
import { Planet } from '../../components'
import './destination.scss'

import { destinations } from '../../assets/data'

const Destination = () => {
   const [activeTab, setActiveTab] = useState(0)

   const changeActiveTab = active => {
      setActiveTab(active)
   }

   return (
      <section className="destination">
         <div className="wrapper">
            <h5 className="destination__heading heading">
               <span>01</span>
               Pick your destination
            </h5>
            <div className="destination__content">
               {destinations.map(({ name, image, description, distance, travel }, index) => (
                  <Planet
                     key={index}
                     name={name}
                     image={image}
                     description={description}
                     distance={distance}
                     travel={travel}
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
         </div>
      </section>
   )
}

export default Destination
