import './Footer.css'
import '../../Pages/Home/Home.css'

import React from 'react'

export const Footer = () => {
  return (
    <div className='Footer'>
    <div className='HContent'>
    <div className='FooterIcons'>
     <img src='https://i.imgur.com/Ky2mBQh.png' className='Homesmicon'/>
     <img src='https://i.imgur.com/9gAYMtU.png' className='Homesmicon'/>
     <img src='https://i.imgur.com/tRZLAKQ.png' className='Homesmicon'/>
     <img src='https://i.imgur.com/Ky2mBQh.png' className='Homesmicon'/> 
     <div className='Footerlinks'>
      <h1 className='Footertext'>FAQ</h1>
      <h1 className='Footertext'>Sobre mim</h1>
      <h1 className='Footertext'>Termos de uso</h1>
     </div>
    </div>
    </div>
    </div>
  )
}
