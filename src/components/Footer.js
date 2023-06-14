import React from 'react'
import {Navbar, NavbarBrand} from "reactstrap"

const Footer = () => {

  return (
    <>
      <Navbar fixed="bottom">
        <NavbarBrand href="/">
          &copy; Shire Shacks Inc. | 2023
        </NavbarBrand>
      </Navbar>
    </>
  )

}

export default Footer