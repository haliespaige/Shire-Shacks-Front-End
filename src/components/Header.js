import React from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap"


const Header = ({currentUser}) => {

  return (
    <>
      <Navbar>
        <a href="/">
          <img
            src="https://secretdallas.com/wp-content/uploads/2022/04/hobbit.png"
            alt="shire shacks icon"
            height="50"
          />
        </a>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/aptindex">Available Units</NavLink>
          </NavItem>
        </Nav>
        <NavItem>
          <NavLink href="/login" className="nav-link">
            Log In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/signup" className="nav-link">
            Sign Up
          </NavLink>
        </NavItem>
      </Navbar>
    </>
  );

}

export default Header