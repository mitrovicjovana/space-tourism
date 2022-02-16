import { useAxios, useSlider } from '../../hooks'
import { PATH } from '../../router'
import { Planet, Loader } from '../../components'
import './destination.scss'

const Destination = () => {
   const [destinations, isLoading] = useAxios(PATH.destination)
   const { activeSlide, changeActiveSlide } = useSlider()

   return (
      <section className="destination">
         <div className="page-heading">
            <h5 className="heading">
               <span>01</span>
               Pick your destination
            </h5>
         </div>
         {isLoading ? (
            <Loader />
         ) : (
            <div className="wrapper">
               {destinations.map(({ name, image, description, distance, travelTime }, index) => (
                  <Planet
                     key={index}
                     name={name}
                     image={image}
                     description={description}
                     distance={distance}
                     travelTime={travelTime}
                     isActive={index === activeSlide}
                  >
                     <div className="destination__list">
                        {destinations.map(({ name }, index) => (
                           <button
                              key={index}
                              className={`destination__list-item nav-item${
                                 index === activeSlide ? ' active' : ''
                              }`}
                              onClick={() => changeActiveSlide(index)}
                           >
                              {name}
                           </button>
                        ))}
                     </div>
                  </Planet>
               ))}
            </div>
         )}
      </section>
   )
}

export default Destination
