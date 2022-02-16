import { useAxios, useSlider } from '../../hooks'
import { PATH } from '../../router'
import { CrewMember, Loader } from '../../components'
import './crew.scss'

const Crew = () => {
   const [crew, isLoading] = useAxios(PATH.crew)
   const { activeSlide, changeActiveSlide } = useSlider(crew, 7000)

   return (
      <section className="crew">
         <div className="page-heading">
            <h5 className="heading">
               <span>02</span>
               Meet your crew
            </h5>
         </div>
         {isLoading ? (
            <Loader />
         ) : (
            <div className="wrapper">
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
         )}
      </section>
   )
}

export default Crew
