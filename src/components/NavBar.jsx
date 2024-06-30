import Link from "next/link";
import {
  Container,
  DropdownDivider,
  DropdownItem,
  Nav,
  NavDropdown,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import { Routes } from "../components/routes";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-light">
        <Container>
          <NavbarBrand href="/" as={Link}>
            <strong>Abdullah</strong>
          </NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {Routes.map((route, key) => (
                <NavLink href={route.url} key={key} as={Link} className="align-items-center">
                  <route.icon className="me-2" />
                  {route.name}
                </NavLink>
              ))}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
