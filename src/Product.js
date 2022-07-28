import React from 'react'
import './Product.css'
function Product({desc,image}) {
  return (
    <div className='product'>
        <div    className='product-image-div'>
            <img className='product-image'  src={image}/>
        </div>
        <div className='product-details'>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Product
