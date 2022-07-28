import React from 'react'
import './Home.css'
import Fashion from './Fashion'
import Mobile from './Mobile'
import Electronics from './Electronics' 
function Home() {
  return (
    <div className='home'>
      <div className='top'></div>
      <Fashion title='Fashion'/>
      <Mobile title='Mobiles'/>
      <Electronics title='Electronics'/>
    </div>
  )
}

export default Home
