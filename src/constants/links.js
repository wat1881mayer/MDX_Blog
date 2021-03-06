import React from 'react'
import { Link } from 'gatsby'
import CategoriesBar from '../components/CategoriesList'
const Links = ({ styleClass, children }) => {
  
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        Categories
        {children}
      </li>
      <li>
        <Link to="/newsletter" className="page-link">
          Newsletter
        </Link>
      </li>
    </ul>
  )
}

export default Links
