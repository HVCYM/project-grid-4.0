import React from 'react'
import './Header.css'
import HomeSharpIcon from '@mui/icons-material/HomeSharp'
import SearchIcon from '@mui/icons-material/Search'
import InputIcon from '@mui/icons-material/Input'
function Header() {
  return (
    <div className='header'>
      <HomeSharpIcon className='home-icon'/>
      <div  className='header-search'>
        <input className='header-search-input' type='text' placeholder='    Search for products,brands and more'></input>
        <SearchIcon className='search-icon'/>
      </div>
      <div className='header-login'>
        <p>About Us</p>
      </div>
    </div>
  )
}

export default Header
