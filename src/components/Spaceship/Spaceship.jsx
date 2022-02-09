import './spaceship.scss'

import { lauchVehiclePortraitImage, lauchVehicleLandscapeImage } from '../../assets'

const Spaceship = () => {
   const {
      name,
      images: { portrait, landscape },
      description,
   } = {
      name: 'Launch vehicle',
      images: {
         portrait: lauchVehiclePortraitImage,
         landscape: lauchVehicleLandscapeImage,
      },
      description:
         "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
   }

   return (
      <div className="spaceship">
         <picture className="spaceship__image">
            <source media="(min-width:1024px)" srcSet={portrait} />
            <img className="spaceship__image" src={landscape} alt={name} />
         </picture>
         <div className="wrapper">
            <div className="spaceship__numbers">1 2 3</div>
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
