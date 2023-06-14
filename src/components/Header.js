import React from 'react'
import {Navbar, NavbarBrand} from "reactstrap"

const Header = () => {

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
      </Navbar>
    </>
  );

}

export default Header