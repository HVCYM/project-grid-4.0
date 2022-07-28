import React from 'react'
import './Electronics.css'
import Product from './Product'
function Electronics({title}) {
  return (
    <div className='electronics'>
      <div className='electronics-title'>{title}</div>
        <div className='electronics-content'>
          <Product
          desc='SONY Alpha 7M3K Mirrorless Camera Body with 28 - 70 mm Zoom Lens  (Black)'
          image='https://rukminim1.flixcart.com/image/832/832/kw9krrk0/dslr-camera/q/l/w/-original-imag8z5wwaqtq9bz.jpeg?q=70'
          />
          <Product
          desc='D-Link DIR-650IN 300 Mbps Wireless Router  (Black, Single Band)'
          image='https://rukminim1.flixcart.com/image/832/832/kbnz8nk0/router/x/y/k/d-link-dir-650in-original-imafsysqj3f3tec5.jpeg?q=70'
          />
          <Product
          desc='SAMSUNG 24 inch Full HD LED Backlit IPS Panel with 3-Sided Borderless Display, Game & Free Sync Mode, Eye Saver Mode'
          image='https://rukminim1.flixcart.com/image/832/832/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70'
          />
          <Product
          desc='APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY13HN/A  (13.6 Inch, Starlight, 1.24 kg)'
          image='https://rukminim1.flixcart.com/image/832/832/l4hcx3k0/computer/p/p/o/macbook-air-thin-and-light-laptop-apple-original-imagfdfpnjjpdhq2.jpeg?q=70'
          />
        </div>
    </div>
  )
}

export default Electronics
