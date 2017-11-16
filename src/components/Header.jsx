import React from 'react';
import { Link } from 'react-router-dom';

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
          <img alt='wokit logo' title='wokit logo' src='https://placehold.it/80x80' />
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