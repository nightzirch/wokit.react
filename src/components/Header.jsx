import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/frying-pan.svg';

const navItems = [
  { name: 'Forside', url: '/' },
  { name: 'Blogg', url: '/blog' },
  { name: 'Kategorier', url: '/category' }
];

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <span className='header__logo'>
          <img alt='wokit logo' title='wokit logo' src={logo} />
        </span>

        <ul className='header__menu'>
          {navItems.map((item, i) => {
            return (
              <li className='header__menu-item' key={i}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;