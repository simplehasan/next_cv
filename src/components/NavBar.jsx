"use client";
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
import { useEffect, useState } from "react";

const NavBar = () => {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [pathname]);

  return (
    <>
      <Navbar expand="lg" className="navbar" id="NavBar">
        <Container>
          <NavbarBrand className="brand-hover">
            <strong className="text-2xl">abdullah.</strong>
          </NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {Routes.map((route, key) => (
                <NavLink
                  href={route.url}
                  key={key}
                  as={Link}
                  eventKey={route.url}
                  className="d-flex align-items-center hover:text-semibold nav-link-hover"
                >
                  <route.icon className="me-1 text-2xl" /> {route.name}
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
