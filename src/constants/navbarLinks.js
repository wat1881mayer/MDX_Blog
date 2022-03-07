import React from 'react'
import { Link } from 'gatsby'
import CategoriesBar from '../components/CategoriesList'
const NavbarLinks = ({ styleClass, clickOn}) => {
    

  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <div className="page-link" onClick={clickOn}>Categories </div>
      </li>
      <li>
        <Link to="/newsletter" className="page-link">
          Newsletter
        </Link>
      </li>
    </ul>
  )
}

export default NavbarLinks
