import React from 'react';

import buddhabaste from '../assets/buddhabaste.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__logo'>
          <img src={buddhabaste} alt='Logo' title='Logo' />
        </div>

        <div className='header__text'>
          <h1 className='header__title'>
            <span className='header__title--light'>Resultater fra</span> Web for dumb, dumber, dummies
            <small className='header__title--small'>med Christian Grimsgaard</small>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;