import './crew-member.scss'

const CrewMember = ({ children, name, image, role, bio, isActive }) => {
   return (
      <div className={`member${isActive === true ? ' active' : ''}`}>
         <div className="member__details">
            <div className="member__info">
               <h4 className="member__role">{role}</h4>
               <h3 className="member__name">{name}</h3>
               <p className="member__bio">{bio}</p>
            </div>
            <div className="member__dots">{children}</div>
         </div>
         <div className="member__image-container">
            <img src={image} alt={name} className="member__image" />
         </div>
      </div>
   )
}

export default CrewMember
