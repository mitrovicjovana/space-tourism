import './planet.scss'

const Planet = ({ children, name, image, description, distance, travel, isActive }) => {
   return (
      <div className={`planet${isActive === true ? ' active' : ''}`}>
         <img src={image} alt={name} className="planet__img" />
         <div>
            {children}
            <div className="planet__description">
               <h2 className="planet__description--heading">{name}</h2>
               <p className="planet__description--text">{description}</p>
               <div className="planet__details">
                  <div className="planet__details--section">
                     <h6>Avg. distance</h6>
                     <h5 className="subheading">{distance}</h5>
                  </div>
                  <div className="planet__details--section">
                     <h6>Est. travel time</h6>
                     <h5 className="subheading">{travel}</h5>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Planet
