import React from 'react';
import menu from '../assets/menu.svg';

const Header_ = ({ displayfuncs }) => {
  return (
    <div className='header bd'>
      <p>Ebookify</p>
      <p>Book Title</p>
      <img src={menu} onClick={() => { displayfuncs.setmenuvisible(!displayfuncs.menuvisible) }} className="showMenuBtn"></img>
    </div>

  )
}

export default Header_