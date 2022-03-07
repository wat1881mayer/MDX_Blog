/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import CategoriesList from './CategoriesList'

import Footer from './Footer'
const Layout = ({ children }) => {
  const [isOpen,setIsOpen] = React.useState(false);
  const [isViewed,setIsViewed] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const clickOn = ()=>{
    setIsViewed(!isViewed)
  }

  console.log(isViewed)

  return (
    <>
    <Navbar toggle={toggle} clickOn={clickOn}/>
    <CategoriesList isViewed={isViewed} clickOn={clickOn} />
    <Sidebar isOpen={isOpen} toggle={toggle}/>
     <main>{children}</main>
     <Footer />
    </>
  )
}

export default Layout
