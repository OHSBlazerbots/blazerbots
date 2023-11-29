import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import blackLogo from "../../images/logo192_black.png";
import { Link } from "gatsby";
import { navBackground, linkDefault, linkActive, linkNavBrand, dropDefault } from './navBar.module.css';

const stopClickPropagation:React.MouseEventHandler = event => event.stopPropagation();

function NavBar() {
  return ( 
    <Navbar className={navBackground} expand="lg" variant="dark">
      <Container>
        <Link to="/" className={linkNavBrand} >
          <Navbar.Brand>
              <img
                alt=""
                src={blackLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              BlazerBots 3807
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navbar navbar-light" >
            <Link to="/about-us" className={linkDefault} activeClassName={linkActive} >About Us</Link>
            <NavDropdown title="Sponsors">
              <NavDropdown.Item>
                <Link to="/sponsors" className={dropDefault} activeClassName={linkActive} > Current Sponsors</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/how-to-be-sponsors" className={dropDefault} activeClassName={linkActive} > Become a Sponsor</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="The Team">
              <NavDropdown.Item>
                <Link to="/about-us" className={dropDefault} activeClassName={linkActive} >Meet the team</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/history" className={dropDefault} activeClassName={linkActive} >Competitions</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/calendar" className={dropDefault} activeClassName={linkActive} >Calendar</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <a href="https://www.firstinspires.org/robotics/frc" className={dropDefault} onClick={stopClickPropagation} >FIRST</a>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/resources" className={linkDefault} activeClassName={linkActive} >Resources</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
