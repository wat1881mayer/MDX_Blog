import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/TitleLogo.svg'
import { StaticImage } from 'gatsby-plugin-image'
import SocialLinks from '../constants/socialLinks'
import NavbarLinks from '../constants/navbarLinks'
const Navbar = ({toggle,clickOn}) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <StaticImage src="../assets/TitleLogo.svg" alt="mad logo" className="nav-logo"/>
          </Link>
          <button className="toggle-btn" onClick={toggle}>
            <FaBars />
          </button>
        </div>
        <NavbarLinks styleClass="nav-links" clickOn={clickOn}/>
        <SocialLinks styleClass="nav-icons" />
      </div>
    </nav>
  )
}

export default Navbar
