import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from "./logo.png";
import './Navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Navbar() {

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
             <img
            src={logo}
            /> 
             H 4 U
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Donate/Volunteer
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={!user && '/login'}
                className='nav-links'
                onClick={handleAuthenticaton}
              >
                 <span >{user ? 'Sign Out' : 'Sign In'}</span>
              </Link>
            </li>

            
             <li>
            <Link to="/Checkout">
          <div className="nav-links"
           onClick={closeMobileMenu}
          >
            <ShoppingBasketIcon />
            
            <span>
              {basket?.length}
           </span>
          </div>
        </Link>
            </li>
          
            <li>
            <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="nav-links-mobile">
            
            <span >{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
              </li>
          </ul>
        
      
         
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
