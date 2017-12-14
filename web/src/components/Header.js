import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar>
      <Nav pullRight>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/breeds/new">Add New Breed</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
