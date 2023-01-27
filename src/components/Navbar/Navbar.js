import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger-menu-icon.svg'
import { ReactComponent as Brand } from '../../assets/icons/icons8-monzo.svg';
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand style={{height:'45px',width:"90px"}}/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger  style={{height:'45px'}}/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">E-Marketing</NavLink>
            </li>
            <li>
              <NavLink to="/ec">Email Campaign</NavLink>
            </li>
            <li>
              <NavLink to="/ad">AdSense</NavLink>
            </li>
            <li>
              <NavLink to="/ap">Affitliate Programme</NavLink>
            </li>
            <li>
              <NavLink to="/sc">Social Media</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar