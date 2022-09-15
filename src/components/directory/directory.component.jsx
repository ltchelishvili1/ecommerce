
import React from 'react'
import DirectoryItem from '../directory-item/directory-item-component'
import { CategoriesContainer } from './categories.styles'
import categories from '../data/data'

const Directory = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />

      ))}


    </CategoriesContainer>
  )
}

export default Directory