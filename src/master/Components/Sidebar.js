import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export const Sidebar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex ">
          <Nav.Link>Home</Nav.Link>
          <Link to={"/cb"}>click</Link>
          <Nav.Link href="#profile">Profile</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
