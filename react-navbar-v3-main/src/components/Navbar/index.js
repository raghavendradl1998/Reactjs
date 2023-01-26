import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Email Campaign
          </NavLink>
          <NavLink to='/services' activeStyle>
            AdSense 
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Affilitate Programme
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Social Media
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Contact Us</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
