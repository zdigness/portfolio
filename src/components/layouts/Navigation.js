import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';

import "./Navigation.css"

export default function Navigation() {
    return (
        <>
        <div>
            <Navbar expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item className="link">
                        <Nav.Link as={HashLink} to={"#about"}>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <Nav.Link as={HashLink} to={"#skills"}>Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <Nav.Link as={HashLink} to={"#projects"}>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="link">
                        <Nav.Link as={HashLink} to={"#contact"}>Contact</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </div>
        <Outlet />
    </>
    );
}
