import React from 'react'
import './Mobile.css'
import Product from './Product'

function Mobile({title}) {
  return (
    <div className='mobile'>
        <div className='mobile-title'>{title}</div>
        <div className='mobile-content'>
          <Product
          desc='APPLE iPhone 12 (Blue, 128 GB)'
          image='https://rukminim1.flixcart.com/image/832/832/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70'
          />
          <Product
          desc='OPPO Reno8 5G (Shimmer Gold, 128 GB)  (8 GB RAM)'
          image='https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/v/o/3/-original-imaggg5rj8sdgzse.jpeg?q=70'
          />
          <Product
          desc='Google Pixel 6a (Charcoal, 128 GB)  (6 GB RAM)'
          image='https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70'
          />
          <Product
          desc='OnePlus 10 Pro 5G (Volcanic Black, 128 GB)  (8 GB RAM)'
          image='https://rukminim1.flixcart.com/image/832/832/l27wtjk0/mobile/j/i/w/10-pro-5g-ne2210-oneplus-original-imagdhvfuwdqa5vw.jpeg?q=70'
          />
          
        </div>
        
    </div>
  )
}

export default Mobile
