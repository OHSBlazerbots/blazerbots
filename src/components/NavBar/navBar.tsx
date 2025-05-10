import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import blackLogo from "../../images/logo192_black.png";
import { Link } from "gatsby";
import { navBackground, linkDefault, linkActive, linkNavBrand, dropDefault } from './navBar.module.css';
import { stopClickPropagation } from "../../utils/events";

// Not using a CSS module because we want to globally modify class names from Bootstrap
import "./navBar-static.css";

const DropdownItem = NavDropdown.Item; // alias so less typing
const DropdownItemProps = {
  as: Link,
  className: dropDefault,
  activeClassName: linkActive,
};
const ExternalLinkProps = {
  className: dropDefault,
  onClick: stopClickPropagation,
};

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
          <Nav className="navbar" >
            <Link to="/about-us" className={linkDefault} activeClassName={linkActive} >About Us</Link>
            <NavDropdown title="Sponsors"  className={linkDefault}>
              <DropdownItem {...DropdownItemProps} to="/sponsors">Current Sponsors</DropdownItem>
              <DropdownItem {...DropdownItemProps} to="/sponsor-us">Sponsor Us</DropdownItem>
            </NavDropdown>
            <NavDropdown title="The Team" className={linkDefault}>
              <DropdownItem {...DropdownItemProps} to="/our-mentors">Mentors</DropdownItem>
              <DropdownItem {...DropdownItemProps} to="/history">Competitions</DropdownItem>
              <DropdownItem {...DropdownItemProps} to="/calendar">Calendar</DropdownItem>
              <NavDropdown.Divider />
              <DropdownItem {...ExternalLinkProps} href="https://www.firstinspires.org/robotics/frc">FIRST</DropdownItem>
            </NavDropdown>
            <Link to="https://overland-robotics.square.site/" className={linkDefault} target="_blank" >Store</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { NavBar };
