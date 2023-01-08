import React from 'react'

const Offer = ({key, index, src, link}) => {
  return (
    <a href={link}> <img src={src} alt={`${index + 1} offer`} /></a>
  )
}

export default Offer