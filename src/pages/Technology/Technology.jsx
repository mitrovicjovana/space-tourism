import { useAxios, useSlider } from '../../hooks'
import { PATH } from '../../router'
import { Loader, Spaceship } from '../../components'
import './technology.scss'

const Technology = () => {
   const [technology, isLoading] = useAxios(PATH.technology)
   const { activeSlide, changeActiveSlide } = useSlider()

   return (
      <section className="technology">
         <div className="page-heading">
            <h5 className="heading">
               <span>03</span>
               Space launch 101
            </h5>
         </div>
         {isLoading ? (
            <Loader />
         ) : (
            technology.map(({ name, imagePortrait, imageLandscape, description }, index) => (
               <Spaceship
                  key={index}
                  name={name}
                  imagePortrait={imagePortrait}
                  imageLandscape={imageLandscape}
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
            ))
         )}
      </section>
   )
}

export default Technology
