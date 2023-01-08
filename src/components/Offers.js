import React from 'react'
import "../styles/Offer.css"
import Offer from './Offer'
const Offers = (props) => {
    const {offer} = props
  return (
    <div className="offerSection">
        {
            offer.map((element, index)=>(
                   <Offer key={element.image} index={index} src={element.image} link={element.url} />
            ))
        }
    </div>
  )
}

export default Offers