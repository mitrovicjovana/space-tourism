import './crew-member.scss'
import { douglasHurleyImage } from '../../assets'

const CrewMember = () => {
   const humanoid = {
      name: 'Douglas Hurley',
      image: douglasHurleyImage,
      role: 'Commander',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
   }

   const { name, image, role, bio } = humanoid

   return (
      <div className="member">
         <div className="member__details">
            <div className="member__info">
               <h4 className="member__role">{role}</h4>
               <h3 className="member__name">{name}</h3>
               <p className="member__bio">{bio}</p>
            </div>
            <div className="member__dots">DOTS</div>
         </div>
         <div className="member__image-container">
            <img src={image} alt={name} className="member__image" />
         </div>
      </div>
   )
}

export default CrewMember
