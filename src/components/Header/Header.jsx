import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PATH } from '../../router'
import { logo, iconClose, iconHamburger } from '../../assets'
import './header.scss'

const Header = () => {
   const [isOpened, setIsOpened] = useState(false)

   const toggleNav = () => {
      setIsOpened(!isOpened)
   }

   return (
      <header className="header">
         <div className="header__static">
            <Link to={PATH.home}>
               <img src={logo} alt="Space tourism logo" className="header__logo" />
            </Link>
            {isOpened ? (
               <button className="nav-close" onClick={toggleNav}>
                  <img src={iconClose} alt="Close icon" />
               </button>
            ) : (
               <button className="nav-hamburger" onClick={toggleNav}>
                  <img src={iconHamburger} alt="Hamburger icon" />
               </button>
            )}
         </div>
         <nav
            className={`header__nav ${isOpened ? 'header__nav--opened' : 'header__nav--collapsed'}`}
         >
            <div className="header__nav--items">
               <NavLink to={PATH.home} className="nav-item">
                  <span>00</span>
                  Home
               </NavLink>
               <NavLink to={PATH.destination} className="nav-item">
                  <span>01</span>
                  Destination
               </NavLink>
               <NavLink to={PATH.crew} className="nav-item">
                  <span>02</span>
                  Crew
               </NavLink>
               <NavLink to={PATH.technology} className="nav-item">
                  <span>03</span>
                  Technology
               </NavLink>
            </div>
         </nav>
      </header>
   )
}

export default Header
