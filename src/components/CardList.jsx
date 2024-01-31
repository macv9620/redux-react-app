import React from 'react'
import { ItemCard } from './CarItem'

const CardList = ({ items }) => {
  return (
    items?.map((item, index) => {
      const abilities = item.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')
      return (
        <ItemCard
          name={item.name}
          image={item.sprites.front_default}
          like={item.like}
          id={item.id}
          abilities={abilities}
          key={index}
        />
      )
    }
    )
  )
}

export { CardList }
