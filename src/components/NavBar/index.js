import React, { useState } from 'react';
import { Link } from 'gatsby';
import './Navbar.css';



function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='https://www.inesmaatalla.com' className='navbar-logo' onClick={closeMobileMenu}>
            EXPLOR <i class='fas fa-angle-double-down' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                #Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                #Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                #Stacks
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar