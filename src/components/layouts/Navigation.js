import homeIcon from '../img/home-svgrepo-com.svg'

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import "./Navigation.css"

export default function Navigation() {
    return (
        <>
        <div>
            <Navbar expand="sm">
            <Navbar.Brand>
                <Link to = {"/"}>
                <img className="home" src={homeIcon} alt="Home"/>
                </Link>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item className="link">
                        <Nav.Link as={Link} to={"/education"}>Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <Nav.Link as={Link} to={"/experience"}>Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </div>
        <Outlet />
    </>
    );
}
