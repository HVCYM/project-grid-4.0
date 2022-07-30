import React from 'react'
import './Product.css'
function Product({desc,image}) {
  return (
    <div className='product'>
        <div className='product-div1'>
          <div    className='product-image-div'>
            <img className='product-image'  src={image}/>
          </div>
          <div className='product-details'>
            <p className='p1'>{desc}</p>
            <p><b>Brand: </b>XYZ</p>
            <p><b>Score: </b>12334</p>
          </div>
          </div>
        <div className='product-div2'>
          <button className='flipkart-button'>Go to flipkart</button>
        </div>
    </div>
  )
}

export default Product
