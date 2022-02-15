import './spaceship.scss'

const Spaceship = ({ children, name, imagePortrait, imageLandscape, description, isActive }) => {
   return (
      <div className={`spaceship${isActive === true ? ' active' : ''}`}>
         <picture className="spaceship__image">
            <source media="(min-width:1024px)" srcSet={imagePortrait} />
            <img className="spaceship__image" src={imageLandscape} alt={name} />
         </picture>
         <div className="wrapper">
            <div className="spaceship__numbers">{children}</div>
            <div className="spaceship__text">
               <h6 className="spaceship__terminology nav-item">The terminology...</h6>
               <h3 className="spaceship__name">{name}</h3>
               <p className="spaceship__description">{description}</p>
            </div>
         </div>
      </div>
   )
}

export default Spaceship
