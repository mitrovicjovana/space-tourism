import { Link, NavLink } from 'react-router-dom'
import { PATH } from '../../router'
import { useNavbar, useToggle } from '../../hooks'
import { logo, iconClose, iconHamburger } from '../../assets'
import './header.scss'

const Header = () => {
   const { homeClassName } = useNavbar()
   const [className, toggleNav, isOpened] = useToggle()

   return (
      <header className={`header${homeClassName}`}>
         <div className="header__static">
            <Link to={PATH.home}>
               <img src={logo} alt="Space tourism logo" className="header__logo" />
            </Link>
            {isOpened ? (
               <button className="nav-btn nav-close" onClick={toggleNav}>
                  <img src={iconClose} alt="Close icon" />
               </button>
            ) : (
               <button className="nav-btn nav-hamburger" onClick={toggleNav}>
                  <img src={iconHamburger} alt="Hamburger icon" />
               </button>
            )}
         </div>
         <nav className={`header__nav ${className}`}>
            <div className="header__nav--items">
               <NavLink to={PATH.home} className="nav-item" onClick={toggleNav}>
                  <span>00</span>
                  Home
               </NavLink>
               <NavLink to={PATH.destination} className="nav-item" onClick={toggleNav}>
                  <span>01</span>
                  Destination
               </NavLink>
               <NavLink to={PATH.crew} className="nav-item" onClick={toggleNav}>
                  <span>02</span>
                  Crew
               </NavLink>
               <NavLink to={PATH.technology} className="nav-item" onClick={toggleNav}>
                  <span>03</span>
                  Technology
               </NavLink>
            </div>
         </nav>
      </header>
   )
}

export default Header
