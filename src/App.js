import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav,NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Routes from "./Routes";
import "./App.css";

function App(props) {
  return (
    <div className="App container">
      <Navbar bg="light" fluid collapseOnSelect>
        
        <Navbar.Collapse>
        <Navbar className="mr-auto">
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar>
          <Nav >
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}
export default App;