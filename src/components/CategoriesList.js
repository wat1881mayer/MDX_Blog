import React from 'react'
import Links from '../constants/links'
import Categories from './Categories'

const CategoriesList = ({isViewed,clickOn}) => {
  return (
    <aside className={`categoriesBar ${isViewed? 'showCategoriesBar':''}`}>
    <div className="categoriesBar-container">
        <Categories />
    </div>
    </aside>
  )
}

export default CategoriesList