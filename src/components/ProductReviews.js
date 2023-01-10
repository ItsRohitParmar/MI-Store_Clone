import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js";
import "../styles/ProductReviews.css"
const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='ProductReviews'>

        {
            ProductReviews.map((item, index)=>(
                <ProductReviewCard key={item.image} image={item.image} index={index} review={item.review} name={item.name} price={item.price}/>
            ))
        }
        
    </div>
  )
}

export default ProductReviews