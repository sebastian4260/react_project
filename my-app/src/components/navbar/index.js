import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './navBar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Smart Shop</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/apple" activeStyle>
            Apple
          </NavLink>
          <NavLink to="/samsung" activeStyle>
            Samsung
          </NavLink>
          <NavLink to="/xiaomi" activeStyle>
            Xiaomi
          </NavLink>
          <NavLink to="/otros" activeStyle>
            Otras Marcas
          </NavLink>
          <NavLink to="/registro" activeStyle>
            Registrarse
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Iniciar Sesion</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
