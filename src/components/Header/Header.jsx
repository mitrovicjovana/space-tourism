import { Link, NavLink } from 'react-router-dom'
import { PATH } from '../../router'
import './header.scss'

const Header = () => {
   return (
      <header className="header">
         <NavLink to={PATH.home}>Home</NavLink>
         <NavLink to={PATH.destination}>Destination</NavLink>
         <NavLink to={PATH.crew}>Crew</NavLink>
         <NavLink to={PATH.technology}>Technology</NavLink>
      </header>
   )
}

export default Header
