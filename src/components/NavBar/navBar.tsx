import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo192 from "../../images/logo192_black.png";
import { Link } from "gatsby";
import { navBackground, linkDefault, linkActive, dropDefault } from './navBar.module.css';

const stopClickPropagation:React.MouseEventHandler = event => event.stopPropagation();

function NavBar() {
  return ( 
    <Navbar className={navBackground} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
            <img
              alt=""
              src={logo192}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Overland BlazerBots
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navbar navbar-light" >
            <Link to="/home" className={linkDefault} activeClassName={linkActive} >Home</Link>
            <Link to="/resources" className={linkDefault} activeClassName={linkActive} >Resources</Link>
            <NavDropdown title="About Us">
              <NavDropdown.Item>
                <Link to="/about-us" className={dropDefault} activeClassName={linkActive} >About Us</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/history" className={dropDefault} activeClassName={linkActive} >Team History</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/sponsors" className={dropDefault} activeClassName={linkActive} >Sponsors</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <a href="https://www.firstinspires.org/robotics/frc" className={dropDefault} onClick={stopClickPropagation} >FIRST</a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
