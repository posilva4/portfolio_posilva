import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/pcPedro.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Pedro Silva</h1>
        <h5 className="text-light">.Net Developer</h5>
        <CTA />
        <div className='me'>         
          <img src={ME} alt="me" />         
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
        <HeaderSocials />
      </div>      
    </header>
  )
}

export default Header