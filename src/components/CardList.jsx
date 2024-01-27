import React from 'react'
import { ItemCard } from './CarItem'

const CardList = ({ items }) => {
  console.log(items)
  return (
    items.map((item, index) => (
      <ItemCard name={item.name} key={index} />
    ))
  )
}

export { CardList }
