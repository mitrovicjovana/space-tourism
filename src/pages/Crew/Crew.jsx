import { CrewMember } from '../../components'
import './crew.scss'

const Crew = () => {
   return (
      <section className="crew">
         <div className="wrapper">
            <h5 className="page-heading heading">
               <span>02</span>
               Meet your crew
            </h5>
            <CrewMember />
         </div>
      </section>
   )
}

export default Crew
