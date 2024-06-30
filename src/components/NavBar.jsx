import Link from "next/link";
import {
  Container,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import { Routes } from "../components/routes";
import ToggleDarkMode from "./ToggleDarkMode";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-light" id="NavBar">
        <Container>
          <NavbarBrand href="/" as={Link}>
            <strong>abdullah.</strong>
          </NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {Routes.map((route, key) => (
                <NavLink href={route.url} key={key} as={Link} className="d-flex align-items-center hover: text-semibold">
                  <route.icon className="me-1" /> {route.name}
                </NavLink>
              ))}
            </Nav>
            <Nav className="ms-auto">
              <ToggleDarkMode />
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
